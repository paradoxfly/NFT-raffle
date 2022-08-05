import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

//create test account
const startingBalance = stdlib.parseCurrency(1000);
const acc = await stdlib.newTestAccount(startingBalance);
const WHITELIST = [];

//Set up functions for checking balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance()
console.log('Your starting balance is: ' + before)
console.log(`Your address is ${acc.getAddress()}`)

const OUTCOME = [ 'Winner Exists', 'No Winner']

//Define common interface for both participants
const Common = {
  //...hasRandom
  random: () => stdlib.hasRandom.random(),

  //function that gets called when checkBalance is called
  checkBalance: async (token) => {
    console.log(`Your network token balance is ${await getBalance()}`)
    console.log(`Your non-network token balance is ${ fmt(await stdlib.balanceOf(acc, token))}`)
  },
};

//Define interface for Alice
const Alice = {
  ...Common,

  getWinningNumber: (numberOfTicketsHex) => {
    const numberOfTickets = parseInt(numberOfTicketsHex)
    const specialNumber = Math.floor(Math.random() * numberOfTickets) + 1
    console.log(`special number is ${specialNumber}`)
    return specialNumber
  },

  viewOutcome: async (outcomeHex, address, NFT_ID) => {
    const outcome = parseInt(outcomeHex)
    console.log(`Outcome ${OUTCOME[outcome]}`)
    console.log(`NFT gets sent to ${address}`)
    console.log(`Your non-network token balance is ${fmt(await stdlib.balanceOf(acc, NFT_ID))}`)
  },  
};


const program = async () => {

  const isDeployer = await ask(
    `Do you want to deploy the contract?`,
    yesno
  )
  const who = isDeployer ? 'Deployer' : 'Attacher';

  console.log(`Starting as ${who}`);

  //Contract gets initialized here
  let ctc = null;   
  if(isDeployer){
    const BFR = await stdlib.launchToken(acc, "BFR", "BFR")

    const numberOfTickets = await ask('How many tickets should be available?', parseInt)
    ctc =  acc.contract(backend);
    backend.Alice(ctc, { 
      ...Alice,
      numberOfTickets,
      getNFTid: () => BFR.id,
    });
    console.log('Deploying contract...');

    const info = JSON.stringify(await ctc.getInfo(), null, 1) //fetch contract info
    console.log(info); //display info
  }
  else{
    const info = await ask(
      `Please paste the contract information of the contract you want to subscribe to:`, 
      JSON.parse
    );
    ctc = acc.contract(backend, info);
    console.log("Successfully connected");
    const limit = parseInt( await ctc.apis.Bob.seeLimit()) //see limit
    console.log(`Limit is ${limit} tickets`)
    const NFT = stdlib.bigNumberToNumber(await ctc.apis.Bob.acceptToken()) //accept token
    await acc.tokenAccept(NFT)
    console.log('Opted into token')

    let submission = await ask(`Pick a number between 1 and ${limit}`, x => {
      x = parseInt(x)
      if((x<1)||(x>limit)){
        throw Error(`Number has to between 1 and ${limit}`)
      }
      else {
        return x
      }
    })

    try {
      await ctc.apis.Bob.submitNumber(submission) //submit number
    } catch (error) {
      console.log(error)
    }

    let keepGoing = true

    while(keepGoing){
      const retry = await ask('Do you want to check outcome?', yesno)
      if(!retry){
        continue
      }
      else{
        try {
          const outcomeTuple = await ctc.apis.Bob.viewOutcome()
          const outcome = parseInt(outcomeTuple[0])
          const winner = outcomeTuple[1]
          console.log(`Outcome ${OUTCOME[outcome]}`)
          console.log(`NFT will get sent to ${winner}`)
          console.log(`Your non-network token balance is ${fmt(await stdlib.balanceOf(acc, NFT))}`)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

}

await program();
