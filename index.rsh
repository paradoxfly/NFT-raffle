'reach 0.1';
 
const [ isOutcome, WINNER_EXISTS, NO_WINNER ] = makeEnum(2);

const getOutcome = (address, LIST, specialNumber) => {
  const outcome = LIST[address].match({ 
    Some: (number) => {
      if(number== specialNumber){
        return WINNER_EXISTS;
      }
      else {
        return NO_WINNER;
      };
    },
    None: () => NO_WINNER,
  });

  return outcome;
};

const common = {
  ...hasRandom
};

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Alice =  Participant('Alice', {
    ...common,
    numberOfTickets: UInt,
    getWinningNumber: Fun([UInt], UInt),
    getNFTid: Fun([], Token),
    viewOutcome: Fun([UInt, Address, Token], Null),
    viewAddress: Fun([Address], Null),
    viewNumber: Fun([UInt], Null)
  });

  const Bob = API('Bob', {
    submitNumber: Fun([UInt], Null),
    seeLimit: Fun([], UInt),
    acceptToken: Fun([], Token),
    viewOutcome: Fun([], Tuple(UInt, Address))
  });

  init();

  Alice.only(() => {
    const numberOfTickets = declassify(interact.numberOfTickets);
    const _winningNumber = interact.getWinningNumber(numberOfTickets);
    const [_commitAlice, _saltAlice ] = makeCommitment(interact, _winningNumber);
    const commitAlice = declassify(_commitAlice);
    const NFT = declassify(interact.getNFTid());
  });
  Alice.publish(numberOfTickets, commitAlice, NFT);
  commit();

  Alice.pay([[1000000, NFT]]);

  const LIST = new Map(Address, UInt);

  const [ counter ] = 
    parallelReduce([ 0 ])
      .invariant((balance() ==  0))
      .while(counter < numberOfTickets)
      .api_(Bob.acceptToken, () => {
        check( this != Alice, "Not Deployer");

        return [ 0, (resolve) => {
          
          resolve(NFT);
          
          return [ counter ];
        }];
      })
      .api_(Bob.seeLimit, () => {
        check(true);

        return [ 0, (resolve) => {
          resolve(numberOfTickets);
          return [ counter ];
        }];
      })
      .api_(Bob.submitNumber, (ticketNumber) => {
        check( isNone(LIST[this]) , "Has already drawn raffle ticket");
        check( (ticketNumber > 0)&&(ticketNumber<numberOfTickets+1), 'Must draw a number within raffle limits');
        check( counter < numberOfTickets, 'Tickets no longer available');

        return [ 0, (resolve) => {
          resolve(null);
          LIST[this] = ticketNumber;

          return [ counter + 1];
        }];
      });

  commit();
  Alice.only(() => {
    const saltAlice = declassify(_saltAlice);
    const winningNumber = declassify(_winningNumber);
  });
  Alice.publish(saltAlice, winningNumber);
  checkCommitment(commitAlice, saltAlice, winningNumber);
  
  const [ reverseCounter, outcome, winner ] =
    parallelReduce([ counter , NO_WINNER, Alice])
    .invariant((balance() == 0))
    .while( reverseCounter > 0)
    .api_(Bob.viewOutcome, () => {
      check(this != Alice, 'is deployer');

      return [ 0, (resolve) => {
        if(isSome(LIST[this])){   //is ticket owner
          if(outcome==WINNER_EXISTS){ //winner already claimed win
            resolve([ outcome, winner]);
            return [ reverseCounter - 1, outcome, winner];
          }
          else {  //no winner yet
            const checkOutcome = getOutcome(this, LIST, winningNumber);
            if(checkOutcome==WINNER_EXISTS){  //is winner
              resolve([checkOutcome, this]);
              return [ reverseCounter - 1, checkOutcome, this];
            }
            else {  //is not winner
              resolve([checkOutcome, winner]);
              return [ reverseCounter - 1, checkOutcome, winner];
            };
          };
        }
        else {  //is not ticket owner
          resolve([outcome, winner]);
          return [ counter, outcome, winner];
        };
      }];
    });

  transfer(balance(NFT), NFT).to(winner);
  Alice.interact.viewOutcome(outcome, winner, NFT);


  commit();
  exit(); 
})