// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc1
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      3: [ctc0, ctc2, ctc3, ctc1, ctc6],
      6: [ctc0, ctc3, ctc1, ctc1, ctc1, ctc1, ctc0, ctc6],
      7: [ctc0, ctc1, ctc2, ctc3, ctc1, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Bob_acceptToken0_53: ctc6,
    Bob_seeLimit0_53: ctc6,
    Bob_submitNumber0_53: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc9]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc11]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v893 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v894 = [v893];
  const v898 = stdlib.protect(ctc1, interact.numberOfTickets, 'for Alice\'s interact field numberOfTickets');
  
  const v901 = stdlib.protect(ctc1, await interact.getWinningNumber(v898), {
    at: './index.rsh:49:53:application',
    fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
    msg: 'getWinningNumber',
    who: 'Alice'
    });
  const v902 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:50:55:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v903 = stdlib.digest(ctc3, [v902, v901]);
  const v905 = stdlib.protect(ctc4, await interact.getNFTid(), {
    at: './index.rsh:52:45:application',
    fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
    msg: 'getNFTid',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v898, v903, v905],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc5, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v907, v908, v909], secs: v911, time: v910, didSend: v35, from: v906 } = txn1;
      
      const v912 = v894[stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '0')];
      const v914 = v912[stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '1')];
      const v915 = v912[stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '2')];
      const v916 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v914, v915];
      const v917 = stdlib.Array_set(v894, stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '0'), v916);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v909
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc5, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v907, v908, v909], secs: v911, time: v910, didSend: v35, from: v906 } = txn1;
  const v912 = v894[stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '0')];
  const v914 = v912[stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '1')];
  const v915 = v912[stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '2')];
  const v916 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v914, v915];
  const v917 = stdlib.Array_set(v894, stdlib.checkedBigNumberify('./index.rsh:54:9:dot', stdlib.UInt_max, '0'), v916);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v906, v907, v908, v909, v917],
    evt_cnt: 0,
    funcNum: 1,
    lct: v910,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:57:15:decimal', stdlib.UInt_max, '1000000'), v909]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v921, time: v920, didSend: v42, from: v919 } = txn2;
      
      ;
      const v922 = v917[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0')];
      const v923 = v922[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0')];
      const v924 = stdlib.add(v923, stdlib.checkedBigNumberify('./index.rsh:57:15:decimal', stdlib.UInt_max, '1000000'));
      const v927 = v922[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '1')];
      const v928 = v922[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '2')];
      const v929 = [v924, v927, v928];
      const v930 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0'), v929);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:57:15:decimal', stdlib.UInt_max, '1000000'),
        kind: 'to',
        tok: v909
        });
      const v932 = stdlib.checkedBigNumberify('./index.rsh:62:22:decimal', stdlib.UInt_max, '0');
      const v933 = v920;
      const v939 = v930;
      
      if (await (async () => {
        const v943 = stdlib.lt(v932, v907);
        
        return v943;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc1, ctc5, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v921, time: v920, didSend: v42, from: v919 } = txn2;
  ;
  const v922 = v917[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0')];
  const v923 = v922[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0')];
  const v924 = stdlib.add(v923, stdlib.checkedBigNumberify('./index.rsh:57:15:decimal', stdlib.UInt_max, '1000000'));
  const v927 = v922[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '1')];
  const v928 = v922[stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '2')];
  const v929 = [v924, v927, v928];
  const v930 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0'), v929);
  ;
  const v931 = stdlib.addressEq(v906, v919);
  stdlib.assert(v931, {
    at: './index.rsh:57:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v932 = stdlib.checkedBigNumberify('./index.rsh:62:22:decimal', stdlib.UInt_max, '0');
  let v933 = v920;
  let v939 = v930;
  
  while (await (async () => {
    const v943 = stdlib.lt(v932, v907);
    
    return v943;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1009], secs: v1011, time: v1010, didSend: v509, from: v1008 } = txn3;
    switch (v1009[0]) {
      case 'Bob_acceptToken0_53': {
        const v1012 = v1009[1];
        undefined /* setApiDetails */;
        const v1017 = stdlib.addressEq(v1008, v906);
        const v1018 = v1017 ? false : true;
        stdlib.assert(v1018, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:66:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        ;
        await txn3.getOutput('Bob_acceptToken', 'v909', ctc4, v909);
        const cv932 = v932;
        const cv933 = v1010;
        const cv939 = v939;
        
        v932 = cv932;
        v933 = cv933;
        v939 = cv939;
        
        continue;
        break;
        }
      case 'Bob_seeLimit0_53': {
        const v1078 = v1009[1];
        undefined /* setApiDetails */;
        ;
        await txn3.getOutput('Bob_seeLimit', 'v907', ctc1, v907);
        const cv932 = v932;
        const cv933 = v1010;
        const cv939 = v939;
        
        v932 = cv932;
        v933 = cv933;
        v939 = cv939;
        
        continue;
        break;
        }
      case 'Bob_submitNumber0_53': {
        const v1144 = v1009[1];
        undefined /* setApiDetails */;
        const v1155 = v1144[stdlib.checkedBigNumberify('./index.rsh:83:12:spread', stdlib.UInt_max, '0')];
        const v1156 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1008), null);
        let v1157;
        switch (v1156[0]) {
          case 'None': {
            const v1158 = v1156[1];
            v1157 = true;
            
            break;
            }
          case 'Some': {
            const v1159 = v1156[1];
            v1157 = false;
            
            break;
            }
          }
        stdlib.assert(v1157, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
          msg: 'Has already drawn raffle ticket',
          who: 'Alice'
          });
        const v1161 = stdlib.gt(v1155, stdlib.checkedBigNumberify('./index.rsh:85:32:decimal', stdlib.UInt_max, '0'));
        const v1162 = stdlib.add(v907, stdlib.checkedBigNumberify('./index.rsh:85:66:decimal', stdlib.UInt_max, '1'));
        const v1163 = stdlib.lt(v1155, v1162);
        const v1164 = v1161 ? v1163 : false;
        stdlib.assert(v1164, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
          msg: 'Must draw a number within raffle limits',
          who: 'Alice'
          });
        const v1166 = stdlib.lt(v932, v907);
        stdlib.assert(v1166, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
          msg: 'Tickets no longer available',
          who: 'Alice'
          });
        ;
        let v1189;
        switch (v1156[0]) {
          case 'None': {
            const v1190 = v1156[1];
            v1189 = true;
            
            break;
            }
          case 'Some': {
            const v1191 = v1156[1];
            v1189 = false;
            
            break;
            }
          }
        stdlib.assert(v1189, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:31:application call to [unknown function] (defined at: ./index.rsh:88:31:function exp)'],
          msg: 'Has already drawn raffle ticket',
          who: 'Alice'
          });
        const v1201 = null;
        await txn3.getOutput('Bob_submitNumber', 'v1201', ctc0, v1201);
        await stdlib.mapSet(map0, v1008, v1155);
        const v1208 = stdlib.add(v932, stdlib.checkedBigNumberify('./index.rsh:92:30:decimal', stdlib.UInt_max, '1'));
        const cv932 = v1208;
        const cv933 = v1010;
        const cv939 = v939;
        
        v932 = cv932;
        v933 = cv933;
        v939 = cv939;
        
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v906, v908, v909, v932, v939, v902, v901],
    evt_cnt: 2,
    funcNum: 3,
    lct: v933,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1213, v1214], secs: v1216, time: v1215, didSend: v641, from: v1212 } = txn3;
      
      ;
      const v1220 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1221 = v932;
      const v1222 = v906;
      const v1223 = v1215;
      const v1229 = v939;
      
      if (await (async () => {
        const v1233 = stdlib.gt(v1221, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
        
        return v1233;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1323 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
        const v1324 = v1323[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v1222,
          tok: v909
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v909
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc5, ctc4, ctc1, ctc13, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1213, v1214], secs: v1216, time: v1215, didSend: v641, from: v1212 } = txn3;
  ;
  const v1217 = stdlib.addressEq(v906, v1212);
  stdlib.assert(v1217, {
    at: './index.rsh:101:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v1218 = stdlib.digest(ctc3, [v1213, v1214]);
  const v1219 = stdlib.digestEq(v908, v1218);
  stdlib.assert(v1219, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:102:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v1220 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v1221 = v932;
  let v1222 = v906;
  let v1223 = v1215;
  let v1229 = v939;
  
  while (await (async () => {
    const v1233 = stdlib.gt(v1221, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
    
    return v1233;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1246], secs: v1248, time: v1247, didSend: v752, from: v1245 } = txn4;
    undefined /* setApiDetails */;
    const v1250 = stdlib.addressEq(v1245, v906);
    const v1251 = v1250 ? false : true;
    stdlib.assert(v1251, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)', 'at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)'],
      msg: 'is deployer',
      who: 'Alice'
      });
    ;
    const v1256 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1245), null);
    let v1257;
    switch (v1256[0]) {
      case 'None': {
        const v1258 = v1256[1];
        v1257 = false;
        
        break;
        }
      case 'Some': {
        const v1259 = v1256[1];
        v1257 = true;
        
        break;
        }
      }
    if (v1257) {
      const v1260 = stdlib.eq(v1220, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v1260) {
        const v1261 = [v1220, v1222];
        await txn4.getOutput('Bob_viewOutcome', 'v1261', ctc10, v1261);
        const v1269 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:115:39:decimal', stdlib.UInt_max, '1'));
        const cv1220 = v1220;
        const cv1221 = v1269;
        const cv1222 = v1222;
        const cv1223 = v1247;
        const cv1229 = v1229;
        
        v1220 = cv1220;
        v1221 = cv1221;
        v1222 = cv1222;
        v1223 = cv1223;
        v1229 = cv1229;
        
        continue;}
      else {
        let v1276;
        switch (v1256[0]) {
          case 'None': {
            const v1277 = v1256[1];
            v1276 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v1278 = v1256[1];
            let v1279;
            const v1280 = stdlib.eq(v1278, v1214);
            if (v1280) {
              v1279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              v1279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            v1276 = v1279;
            
            break;
            }
          }
        const v1281 = stdlib.eq(v1276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v1281) {
          const v1282 = [v1276, v1245];
          await txn4.getOutput('Bob_viewOutcome', 'v1282', ctc10, v1282);
          const v1290 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, '1'));
          const cv1220 = v1276;
          const cv1221 = v1290;
          const cv1222 = v1245;
          const cv1223 = v1247;
          const cv1229 = v1229;
          
          v1220 = cv1220;
          v1221 = cv1221;
          v1222 = cv1222;
          v1223 = cv1223;
          v1229 = cv1229;
          
          continue;}
        else {
          const v1296 = [v1276, v1222];
          await txn4.getOutput('Bob_viewOutcome', 'v1296', ctc10, v1296);
          const v1304 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:125:41:decimal', stdlib.UInt_max, '1'));
          const cv1220 = v1276;
          const cv1221 = v1304;
          const cv1222 = v1222;
          const cv1223 = v1247;
          const cv1229 = v1229;
          
          v1220 = cv1220;
          v1221 = cv1221;
          v1222 = cv1222;
          v1223 = cv1223;
          v1229 = cv1229;
          
          continue;}}}
    else {
      const v1310 = [v1220, v1222];
      await txn4.getOutput('Bob_viewOutcome', 'v1310', ctc10, v1310);
      const cv1220 = v1220;
      const cv1221 = v932;
      const cv1222 = v1222;
      const cv1223 = v1247;
      const cv1229 = v1229;
      
      v1220 = cv1220;
      v1221 = cv1221;
      v1222 = cv1222;
      v1223 = cv1223;
      v1229 = cv1229;
      
      continue;}
    
    }
  const v1323 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
  const v1324 = v1323[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
  ;
  stdlib.protect(ctc0, await interact.viewOutcome(v1220, v1222, v909), {
    at: './index.rsh:137:29:application',
    fs: ['at ./index.rsh:137:29:application call to [unknown function] (defined at: ./index.rsh:137:29:function exp)', 'at ./index.rsh:137:29:application call to "liftedInteract" (defined at: ./index.rsh:137:29:application)'],
    msg: 'viewOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function _Bob_acceptToken7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_acceptToken7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_acceptToken7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_acceptToken0_53: ctc9,
    Bob_seeLimit0_53: ctc9,
    Bob_submitNumber0_53: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v906, v907, v908, v909, v932, v939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc5, ctc1, ctc8]);
  const v944 = ctc.selfAddress();
  const v946 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:62:19:application call to "runBob_acceptToken0_53" (defined at: ./index.rsh:65:12:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'in',
    who: 'Bob_acceptToken'
    });
  const v947 = stdlib.addressEq(v944, v906);
  const v948 = v947 ? false : true;
  stdlib.assert(v948, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:66:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:62:19:application call to "runBob_acceptToken0_53" (defined at: ./index.rsh:65:12:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_acceptToken'
    });
  const v953 = ['Bob_acceptToken0_53', v946];
  
  const txn1 = await (ctc.sendrecv({
    args: [v906, v907, v908, v909, v932, v939, v953],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1009], secs: v1011, time: v1010, didSend: v509, from: v1008 } = txn1;
      
      switch (v1009[0]) {
        case 'Bob_acceptToken0_53': {
          const v1012 = v1009[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_acceptToken"
            });
          ;
          const v1040 = await txn1.getOutput('Bob_acceptToken', 'v909', ctc5, v909);
          
          const v1766 = v932;
          const v1768 = v939;
          const v1769 = stdlib.lt(v932, v907);
          if (v1769) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bob_seeLimit0_53': {
          const v1078 = v1009[1];
          
          break;
          }
        case 'Bob_submitNumber0_53': {
          const v1144 = v1009[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc5, ctc1, ctc8, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1009], secs: v1011, time: v1010, didSend: v509, from: v1008 } = txn1;
  switch (v1009[0]) {
    case 'Bob_acceptToken0_53': {
      const v1012 = v1009[1];
      undefined /* setApiDetails */;
      const v1017 = stdlib.addressEq(v1008, v906);
      const v1018 = v1017 ? false : true;
      stdlib.assert(v1018, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:66:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_acceptToken'
        });
      ;
      const v1040 = await txn1.getOutput('Bob_acceptToken', 'v909', ctc5, v909);
      if (v509) {
        stdlib.protect(ctc0, await interact.out(v1012, v1040), {
          at: './index.rsh:65:13:application',
          fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:70:18:application call to "resolve" (defined at: ./index.rsh:68:31:function exp)', 'at ./index.rsh:68:31:application call to [unknown function] (defined at: ./index.rsh:68:31:function exp)'],
          msg: 'out',
          who: 'Bob_acceptToken'
          });
        }
      else {
        }
      
      const v1766 = v932;
      const v1768 = v939;
      const v1769 = stdlib.lt(v932, v907);
      if (v1769) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Bob_seeLimit0_53': {
      const v1078 = v1009[1];
      return;
      break;
      }
    case 'Bob_submitNumber0_53': {
      const v1144 = v1009[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_seeLimit7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_seeLimit7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_seeLimit7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_acceptToken0_53: ctc9,
    Bob_seeLimit0_53: ctc9,
    Bob_submitNumber0_53: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v906, v907, v908, v909, v932, v939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc5, ctc1, ctc8]);
  const v957 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:75:30:application call to [unknown function] (defined at: ./index.rsh:75:30:function exp)', 'at ./index.rsh:62:19:application call to "runBob_seeLimit0_53" (defined at: ./index.rsh:75:12:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'in',
    who: 'Bob_seeLimit'
    });
  const v962 = ['Bob_seeLimit0_53', v957];
  
  const txn1 = await (ctc.sendrecv({
    args: [v906, v907, v908, v909, v932, v939, v962],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1009], secs: v1011, time: v1010, didSend: v509, from: v1008 } = txn1;
      
      switch (v1009[0]) {
        case 'Bob_acceptToken0_53': {
          const v1012 = v1009[1];
          
          break;
          }
        case 'Bob_seeLimit0_53': {
          const v1078 = v1009[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_seeLimit"
            });
          ;
          const v1114 = await txn1.getOutput('Bob_seeLimit', 'v907', ctc1, v907);
          
          const v1966 = v932;
          const v1968 = v939;
          const v1969 = stdlib.lt(v932, v907);
          if (v1969) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bob_submitNumber0_53': {
          const v1144 = v1009[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc5, ctc1, ctc8, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1009], secs: v1011, time: v1010, didSend: v509, from: v1008 } = txn1;
  switch (v1009[0]) {
    case 'Bob_acceptToken0_53': {
      const v1012 = v1009[1];
      return;
      break;
      }
    case 'Bob_seeLimit0_53': {
      const v1078 = v1009[1];
      undefined /* setApiDetails */;
      ;
      const v1114 = await txn1.getOutput('Bob_seeLimit', 'v907', ctc1, v907);
      if (v509) {
        stdlib.protect(ctc0, await interact.out(v1078, v1114), {
          at: './index.rsh:75:13:application',
          fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:13:function exp)', 'at ./index.rsh:79:18:application call to "resolve" (defined at: ./index.rsh:78:31:function exp)', 'at ./index.rsh:78:31:application call to [unknown function] (defined at: ./index.rsh:78:31:function exp)'],
          msg: 'out',
          who: 'Bob_seeLimit'
          });
        }
      else {
        }
      
      const v1966 = v932;
      const v1968 = v939;
      const v1969 = stdlib.lt(v932, v907);
      if (v1969) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Bob_submitNumber0_53': {
      const v1144 = v1009[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_submitNumber7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_submitNumber7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_submitNumber7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Bob_acceptToken0_53: ctc10,
    Bob_seeLimit0_53: ctc10,
    Bob_submitNumber0_53: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v906, v907, v908, v909, v932, v939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc5, ctc1, ctc8]);
  const v964 = ctc.selfAddress();
  const v966 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to "runBob_submitNumber0_53" (defined at: ./index.rsh:83:12:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'in',
    who: 'Bob_submitNumber'
    });
  const v967 = v966[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v969 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v964), null);
  let v970;
  switch (v969[0]) {
    case 'None': {
      const v971 = v969[1];
      v970 = true;
      
      break;
      }
    case 'Some': {
      const v972 = v969[1];
      v970 = false;
      
      break;
      }
    }
  stdlib.assert(v970, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to "runBob_submitNumber0_53" (defined at: ./index.rsh:83:12:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'Has already drawn raffle ticket',
    who: 'Bob_submitNumber'
    });
  const v974 = stdlib.gt(v967, stdlib.checkedBigNumberify('./index.rsh:85:32:decimal', stdlib.UInt_max, '0'));
  const v975 = stdlib.add(v907, stdlib.checkedBigNumberify('./index.rsh:85:66:decimal', stdlib.UInt_max, '1'));
  const v976 = stdlib.lt(v967, v975);
  const v977 = v974 ? v976 : false;
  stdlib.assert(v977, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to "runBob_submitNumber0_53" (defined at: ./index.rsh:83:12:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'Must draw a number within raffle limits',
    who: 'Bob_submitNumber'
    });
  const v979 = stdlib.lt(v932, v907);
  stdlib.assert(v979, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to "runBob_submitNumber0_53" (defined at: ./index.rsh:83:12:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'Tickets no longer available',
    who: 'Bob_submitNumber'
    });
  const v986 = ['Bob_submitNumber0_53', v966];
  
  let v997;
  switch (v969[0]) {
    case 'None': {
      const v998 = v969[1];
      v997 = true;
      
      break;
      }
    case 'Some': {
      const v999 = v969[1];
      v997 = false;
      
      break;
      }
    }
  stdlib.assert(v997, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'Has already drawn raffle ticket',
    who: 'Bob_submitNumber'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v906, v907, v908, v909, v932, v939, v986],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1009], secs: v1011, time: v1010, didSend: v509, from: v1008 } = txn1;
      
      switch (v1009[0]) {
        case 'Bob_acceptToken0_53': {
          const v1012 = v1009[1];
          
          break;
          }
        case 'Bob_seeLimit0_53': {
          const v1078 = v1009[1];
          
          break;
          }
        case 'Bob_submitNumber0_53': {
          const v1144 = v1009[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_submitNumber"
            });
          const v1155 = v1144[stdlib.checkedBigNumberify('./index.rsh:83:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1008), null);
          ;
          const v1201 = null;
          const v1202 = await txn1.getOutput('Bob_submitNumber', 'v1201', ctc0, v1201);
          
          await stdlib.simMapSet(sim_r, 0, v1008, v1155);
          const v1208 = stdlib.add(v932, stdlib.checkedBigNumberify('./index.rsh:92:30:decimal', stdlib.UInt_max, '1'));
          const v2166 = v1208;
          const v2168 = v939;
          const v2169 = stdlib.lt(v1208, v907);
          if (v2169) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc5, ctc1, ctc8, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1009], secs: v1011, time: v1010, didSend: v509, from: v1008 } = txn1;
  switch (v1009[0]) {
    case 'Bob_acceptToken0_53': {
      const v1012 = v1009[1];
      return;
      break;
      }
    case 'Bob_seeLimit0_53': {
      const v1078 = v1009[1];
      return;
      break;
      }
    case 'Bob_submitNumber0_53': {
      const v1144 = v1009[1];
      undefined /* setApiDetails */;
      const v1155 = v1144[stdlib.checkedBigNumberify('./index.rsh:83:12:spread', stdlib.UInt_max, '0')];
      const v1156 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1008), null);
      let v1157;
      switch (v1156[0]) {
        case 'None': {
          const v1158 = v1156[1];
          v1157 = true;
          
          break;
          }
        case 'Some': {
          const v1159 = v1156[1];
          v1157 = false;
          
          break;
          }
        }
      stdlib.assert(v1157, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
        msg: 'Has already drawn raffle ticket',
        who: 'Bob_submitNumber'
        });
      const v1161 = stdlib.gt(v1155, stdlib.checkedBigNumberify('./index.rsh:85:32:decimal', stdlib.UInt_max, '0'));
      const v1162 = stdlib.add(v907, stdlib.checkedBigNumberify('./index.rsh:85:66:decimal', stdlib.UInt_max, '1'));
      const v1163 = stdlib.lt(v1155, v1162);
      const v1164 = v1161 ? v1163 : false;
      stdlib.assert(v1164, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
        msg: 'Must draw a number within raffle limits',
        who: 'Bob_submitNumber'
        });
      const v1166 = stdlib.lt(v932, v907);
      stdlib.assert(v1166, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:46:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:83:46:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
        msg: 'Tickets no longer available',
        who: 'Bob_submitNumber'
        });
      ;
      let v1189;
      switch (v1156[0]) {
        case 'None': {
          const v1190 = v1156[1];
          v1189 = true;
          
          break;
          }
        case 'Some': {
          const v1191 = v1156[1];
          v1189 = false;
          
          break;
          }
        }
      stdlib.assert(v1189, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:84:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:31:application call to [unknown function] (defined at: ./index.rsh:88:31:function exp)'],
        msg: 'Has already drawn raffle ticket',
        who: 'Bob_submitNumber'
        });
      const v1201 = null;
      const v1202 = await txn1.getOutput('Bob_submitNumber', 'v1201', ctc0, v1201);
      if (v509) {
        stdlib.protect(ctc0, await interact.out(v1144, v1202), {
          at: './index.rsh:83:13:application',
          fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:13:function exp)', 'at ./index.rsh:89:18:application call to "resolve" (defined at: ./index.rsh:88:31:function exp)', 'at ./index.rsh:88:31:application call to [unknown function] (defined at: ./index.rsh:88:31:function exp)'],
          msg: 'out',
          who: 'Bob_submitNumber'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v1008, v1155);
      const v1208 = stdlib.add(v932, stdlib.checkedBigNumberify('./index.rsh:92:30:decimal', stdlib.UInt_max, '1'));
      const v2166 = v1208;
      const v2168 = v939;
      const v2169 = stdlib.lt(v1208, v907);
      if (v2169) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Bob_viewOutcome6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_viewOutcome6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_viewOutcome6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v906, v909, v932, v1214, v1220, v1221, v1222, v1229] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7]);
  const v1234 = ctc.selfAddress();
  const v1236 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)', 'at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)'],
    msg: 'in',
    who: 'Bob_viewOutcome'
    });
  const v1237 = stdlib.addressEq(v1234, v906);
  const v1238 = v1237 ? false : true;
  stdlib.assert(v1238, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)', 'at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)'],
    msg: 'is deployer',
    who: 'Bob_viewOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v906, v909, v932, v1214, v1220, v1221, v1222, v1229, v1236],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:111:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1246], secs: v1248, time: v1247, didSend: v752, from: v1245 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_viewOutcome"
        });
      ;
      const v1256 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1245), null);
      let v1257;
      switch (v1256[0]) {
        case 'None': {
          const v1258 = v1256[1];
          v1257 = false;
          
          break;
          }
        case 'Some': {
          const v1259 = v1256[1];
          v1257 = true;
          
          break;
          }
        }
      if (v1257) {
        const v1260 = stdlib.eq(v1220, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v1260) {
          const v1261 = [v1220, v1222];
          const v1262 = await txn1.getOutput('Bob_viewOutcome', 'v1261', ctc9, v1261);
          
          const v1269 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:115:39:decimal', stdlib.UInt_max, '1'));
          const v2216 = v1220;
          const v2217 = v1269;
          const v2218 = v1222;
          const v2220 = v1229;
          const v2221 = stdlib.gt(v1269, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
          if (v2221) {
            sim_r.isHalt = false;
            }
          else {
            const v2222 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
            const v2223 = v2222[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1222,
              tok: v909
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v909
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          let v1276;
          switch (v1256[0]) {
            case 'None': {
              const v1277 = v1256[1];
              v1276 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v1278 = v1256[1];
              let v1279;
              const v1280 = stdlib.eq(v1278, v1214);
              if (v1280) {
                v1279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v1279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              v1276 = v1279;
              
              break;
              }
            }
          const v1281 = stdlib.eq(v1276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v1281) {
            const v1282 = [v1276, v1245];
            const v1283 = await txn1.getOutput('Bob_viewOutcome', 'v1282', ctc9, v1282);
            
            const v1290 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, '1'));
            const v2224 = v1276;
            const v2225 = v1290;
            const v2226 = v1245;
            const v2228 = v1229;
            const v2229 = stdlib.gt(v1290, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
            if (v2229) {
              sim_r.isHalt = false;
              }
            else {
              const v2230 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
              const v2231 = v2230[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v1245,
                tok: v909
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v909
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1296 = [v1276, v1222];
            const v1297 = await txn1.getOutput('Bob_viewOutcome', 'v1296', ctc9, v1296);
            
            const v1304 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:125:41:decimal', stdlib.UInt_max, '1'));
            const v2232 = v1276;
            const v2233 = v1304;
            const v2234 = v1222;
            const v2236 = v1229;
            const v2237 = stdlib.gt(v1304, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
            if (v2237) {
              sim_r.isHalt = false;
              }
            else {
              const v2238 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
              const v2239 = v2238[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v1222,
                tok: v909
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v909
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1310 = [v1220, v1222];
        const v1311 = await txn1.getOutput('Bob_viewOutcome', 'v1310', ctc9, v1310);
        
        const v2240 = v1220;
        const v2241 = v932;
        const v2242 = v1222;
        const v2244 = v1229;
        const v2245 = stdlib.gt(v932, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
        if (v2245) {
          sim_r.isHalt = false;
          }
        else {
          const v2246 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
          const v2247 = v2246[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v1222,
            tok: v909
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v909
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1246], secs: v1248, time: v1247, didSend: v752, from: v1245 } = txn1;
  undefined /* setApiDetails */;
  const v1250 = stdlib.addressEq(v1245, v906);
  const v1251 = v1250 ? false : true;
  stdlib.assert(v1251, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)', 'at ./index.rsh:108:31:application call to [unknown function] (defined at: ./index.rsh:108:31:function exp)'],
    msg: 'is deployer',
    who: 'Bob_viewOutcome'
    });
  ;
  const v1256 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1245), null);
  let v1257;
  switch (v1256[0]) {
    case 'None': {
      const v1258 = v1256[1];
      v1257 = false;
      
      break;
      }
    case 'Some': {
      const v1259 = v1256[1];
      v1257 = true;
      
      break;
      }
    }
  if (v1257) {
    const v1260 = stdlib.eq(v1220, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v1260) {
      const v1261 = [v1220, v1222];
      const v1262 = await txn1.getOutput('Bob_viewOutcome', 'v1261', ctc9, v1261);
      if (v752) {
        stdlib.protect(ctc0, await interact.out(v1246, v1262), {
          at: './index.rsh:108:11:application',
          fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:114:20:application call to "resolve" (defined at: ./index.rsh:111:29:function exp)', 'at ./index.rsh:111:29:application call to [unknown function] (defined at: ./index.rsh:111:29:function exp)'],
          msg: 'out',
          who: 'Bob_viewOutcome'
          });
        }
      else {
        }
      
      const v1269 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:115:39:decimal', stdlib.UInt_max, '1'));
      const v2216 = v1220;
      const v2217 = v1269;
      const v2218 = v1222;
      const v2220 = v1229;
      const v2221 = stdlib.gt(v1269, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
      if (v2221) {
        return;
        }
      else {
        const v2222 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
        const v2223 = v2222[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }}
    else {
      let v1276;
      switch (v1256[0]) {
        case 'None': {
          const v1277 = v1256[1];
          v1276 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          
          break;
          }
        case 'Some': {
          const v1278 = v1256[1];
          let v1279;
          const v1280 = stdlib.eq(v1278, v1214);
          if (v1280) {
            v1279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v1279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          v1276 = v1279;
          
          break;
          }
        }
      const v1281 = stdlib.eq(v1276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v1281) {
        const v1282 = [v1276, v1245];
        const v1283 = await txn1.getOutput('Bob_viewOutcome', 'v1282', ctc9, v1282);
        if (v752) {
          stdlib.protect(ctc0, await interact.out(v1246, v1283), {
            at: './index.rsh:108:11:application',
            fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:120:22:application call to "resolve" (defined at: ./index.rsh:111:29:function exp)', 'at ./index.rsh:111:29:application call to [unknown function] (defined at: ./index.rsh:111:29:function exp)'],
            msg: 'out',
            who: 'Bob_viewOutcome'
            });
          }
        else {
          }
        
        const v1290 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, '1'));
        const v2224 = v1276;
        const v2225 = v1290;
        const v2226 = v1245;
        const v2228 = v1229;
        const v2229 = stdlib.gt(v1290, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
        if (v2229) {
          return;
          }
        else {
          const v2230 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
          const v2231 = v2230[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v1296 = [v1276, v1222];
        const v1297 = await txn1.getOutput('Bob_viewOutcome', 'v1296', ctc9, v1296);
        if (v752) {
          stdlib.protect(ctc0, await interact.out(v1246, v1297), {
            at: './index.rsh:108:11:application',
            fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:124:22:application call to "resolve" (defined at: ./index.rsh:111:29:function exp)', 'at ./index.rsh:111:29:application call to [unknown function] (defined at: ./index.rsh:111:29:function exp)'],
            msg: 'out',
            who: 'Bob_viewOutcome'
            });
          }
        else {
          }
        
        const v1304 = stdlib.sub(v1221, stdlib.checkedBigNumberify('./index.rsh:125:41:decimal', stdlib.UInt_max, '1'));
        const v2232 = v1276;
        const v2233 = v1304;
        const v2234 = v1222;
        const v2236 = v1229;
        const v2237 = stdlib.gt(v1304, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
        if (v2237) {
          return;
          }
        else {
          const v2238 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
          const v2239 = v2238[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}}}
  else {
    const v1310 = [v1220, v1222];
    const v1311 = await txn1.getOutput('Bob_viewOutcome', 'v1310', ctc9, v1310);
    if (v752) {
      stdlib.protect(ctc0, await interact.out(v1246, v1311), {
        at: './index.rsh:108:11:application',
        fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:130:18:application call to "resolve" (defined at: ./index.rsh:111:29:function exp)', 'at ./index.rsh:111:29:application call to [unknown function] (defined at: ./index.rsh:111:29:function exp)'],
        msg: 'out',
        who: 'Bob_viewOutcome'
        });
      }
    else {
      }
    
    const v2240 = v1220;
    const v2241 = v932;
    const v2242 = v1222;
    const v2244 = v1229;
    const v2245 = stdlib.gt(v932, stdlib.checkedBigNumberify('./index.rsh:107:30:decimal', stdlib.UInt_max, '0'));
    if (v2245) {
      return;
      }
    else {
      const v2246 = v1229[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
      const v2247 = v2246[stdlib.checkedBigNumberify('./index.rsh:136:19:application', stdlib.UInt_max, '0')];
      ;
      return;
      }}
  
  
  };
export async function Bob_acceptToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_acceptToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_acceptToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_acceptToken7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_seeLimit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_seeLimit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_seeLimit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_seeLimit7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_submitNumber(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_submitNumber expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_submitNumber expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_submitNumber7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_viewOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_viewOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_viewOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bob_viewOutcome6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_acceptToken()uint64`, `Bob_seeLimit()uint64`, `Bob_submitNumber(uint64)byte[0]`, `Bob_viewOutcome()(uint64,address)`],
    pure: [],
    sigs: [`Bob_acceptToken()uint64`, `Bob_seeLimit()uint64`, `Bob_submitNumber(uint64)byte[0]`, `Bob_viewOutcome()(uint64,address)`]
    },
  appApproval: `BiATAAEIAwYEIEgCCfewuMcM5dzgwg/R/PzsCgUHKEDAhD2gjQYmAwEAAAEBIjUAMRhBBdgpZEkiWzUBJFs1AjEZIxJBAAoxACghCa9mQgWlNhoAF0lBAFsiNQQjNQZJIQoMQAAqSSELDEAAEiELEkQ2GgE1/4ABAjT/UEIAWiEKEkQpNf8qNP9QJK9QQgBJSSEMDEAACCEMEkQpQgFjgcLvnP4FEkQpNf8oNP9QJK9QQgAlNhoCFzUENhoDNhoBF0klDEADF0khDQxAAqNJIQQMQAEsIQQSRCEONAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEGWzX+VyggNf0hB1s1/IFQWzX7V1gRNfpJNQU1+YAEFAzmCDT5ULA0+SJVSSMMQACsSSEIDEAAfyEIEkQ0+VcBCDX4NPgXNfcxAIgE5kk19iJVQAAGIzX1QgAGIjX1QgAANPVENPciDTT3NP4jCAwQRDT7NP4MRDT2IlVAAAYjNfRCAAYiNfRCAAA09ESACAAAAAAAAASxsCk1BzEAKCo09xZQZjT/NP40/TT8NPsjCDIGNPpCAzJIgAgAAAAAAAADizT+FlCwNP4WNQc0/zT+NP00/DT7MgY0+kIDDEgxADT/E0SACAAAAAAAAAONNPwWULA0/BY1BzT/NP40/TT8NPsyBjT6QgLgSCEENAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hBls1/iEPWzX9gTBbNfyBOFs1+yEQWzX6V0ggNflXaBE1+Ek1BTX3gARokmRjNPdQsDEANP8TRDEAiAPNSTX1IlVAAAYiNfRCAAYjNfRCAAA09EEAyzT7IhJBADGACAAAAAAAAATtNPsWNPlQULA0+xY0+VA1BzT/NP40/TT8NPs0+iMJNPkyBjT4QgKRNPUiVUAABiM180IAHTT1I1tJNfI0/BJBAAYiNfFCAAMjNfE08TXzQgAANPMiEkEAMYAIAAAAAAAABQI08xYxAFBQsDTzFjEAUDUHNP80/jT9NPw08zT6IwkxADIGNPhCAi+ACAAAAAAAAAUQNPMWNPlQULA08xY0+VA1BzT/NP40/TT8NPM0+iMJNPkyBjT4QgH+gAgAAAAAAAAFHjT7FjT5UFCwNPsWNPlQNQc0/zT+NP00/DT7NP00+TIGNPhCAc8lEkQlNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hB1s1/kk1BUkiWzX9JFs1/IAEpKXwiDT9FlA0/BZQsDT/MQASRDQDVyAgNP0WNPwWUAESRDT/NAMhEFs0/jT8IzT+NP8yBjQDV1ARQgFiSSMMQABsIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEHWzX+V1ARNf2ABJqLkXSwNP1XABE1/CERNP6IAjA0/zEAEkQ0/zQDIQZbNANXKCA0/iIyBjT8IlshEQgWNPxXCAhQNPxXEAFQQgCRSCESiAHkIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/1cIIDX+IQ9bNf2ABJRdYRY0/xZQNP5QNP0WULCBEa9JNfxXABE1+ySvNPtXCAhQNPtXEAFQNfohEogBj7EisgEishIhBbIQMgqyFDT9shGzMQA0/xZQNP5QNP0WUDT6UChLAVcAYWdIIzUBMgY1AkIA+DX/Nf41/TX8Nfs1+jX5NP00+gxBACc0+TT6FlA0+1A0/BZQNP0WUDT/UChLAVcAaWdIIQ41ATIGNQJCALs0+TT7UDT8FlA0/RZQNP9QKEsBVwBhZ0glNQEyBjUCQgCZNf81/jX9Nfw1+zX6Nfk1+DX3NPwiDUEALzT3NPgWUDT5FlA0+hZQNPsWUDT8FlA0/VA0/1AoSwFXAHlnSCEENQEyBjUCQgBRsSKyATT/VwARIluyEiEFshA0/bIUNPiyEbOxIrIBIrISIQWyEDIJshUyCrIUNPiyEbNCAAAxGSENEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQgxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQmviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 121,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v907",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v908",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v909",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v907",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v908",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v909",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1246",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_acceptToken0_53",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_seeLimit0_53",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Bob_submitNumber0_53",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v1009",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1201",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1261",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1282",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1296",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1310",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v907",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v909",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_acceptToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_seeLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_submitNumber",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_viewOutcome",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "internalType": "struct T19",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1246",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_acceptToken0_53",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_seeLimit0_53",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Bob_submitNumber0_53",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v1009",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002bb538038062002bb583398101604081905262000026916200041b565b60008055436003556200003862000247565b604080513381528351602080830191909152808501518051838501529081015160608301528201516001600160a01b0316608082015290517fdf247b273bc7c85cd9cae926ce7a7f5c203e1e072d08d6697ca73c04346c8d6e9181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b338152602080840180515182840152805182015160408085019190915290518101516001600160a01b0316606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c6565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055f565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001620002a962000380565b828054620002ff9062000589565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b602085810151825260408601519082015260608501519092506001600160a01b0381168114620004b357600080fd5b604083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601519093168385015260808086015160e086019490939291860160005b600181101562000553578551805183528581015186840152840151151584830152948401949082019060010162000521565b50505050505092915050565b60006000198214156200058257634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059e57607f821691505b60208210811415620005c057634e487b7160e01b600052602260045260246000fd5b50919050565b6125df80620005d66000396000f3fe6080604052600436106100a55760003560e01c8063ad2d91d111610061578063ad2d91d11461016d578063ad9fa3d814610180578063b2ffde8a14610193578063d86460cb146101b3578063e9031137146101c8578063f7cdfe41146101db57005b80631e93b0f1146100ae5780632c10a159146100d25780633bc5b7bf146100e557806352ebb363146101125780638323075714610135578063ab53f2c61461014a57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611ca8565b6101e3565b3480156100f157600080fd5b50610105610100366004611cd9565b610207565b6040516100c99190611d0c565b610125610120366004611d43565b61021e565b60405190151581526020016100c9565b34801561014157600080fd5b506001546100bf565b34801561015657600080fd5b5061015f610259565b6040516100c9929190611d88565b6100ac61017b366004611dc2565b6102f6565b6100ac61018e366004611ca8565b610316565b61019b610336565b6040516001600160a01b0390911681526020016100c9565b6101bb610363565b6040516100c99190611dd4565b6100ac6101d6366004611df4565b6103a4565b6100bf6103c4565b6101eb611822565b6102036101fd36849003840184611edf565b826103f4565b5050565b61020f61185b565b6102188261062e565b92915050565b600061022861187e565b6020810180515160029052515160600151839052610244611822565b61024e82826106ec565b604001519392505050565b60006060600054600280805461026e90611f17565b80601f016020809104026020016040519081016040528092919081815260200182805461029a90611f17565b80156102e75780601f106102bc576101008083540402835291602001916102e7565b820191906000526020600020905b8154815290600101906020018083116102ca57829003601f168201915b50505050509050915091509091565b6102fe611822565b61020361031036849003840184611f4c565b82610bab565b61031e611822565b61020361033036849003840184611fa6565b82610dbb565b600061034061187e565b60208101515160009052610352611822565b61035c82826106ec565b5192915050565b604080518082019091526000808252602082015261037f6118ca565b602081015160009052610390611822565b61039a8282610dbb565b6060015192915050565b6103ac611822565b6102036103be36849003840184612000565b826106ec565b60006103ce61187e565b602081015151600190526103e0611822565b6103ea82826106ec565b6020015192915050565b610404600160005414600b611399565b815161041f90158061041857508251600154145b600c611399565b60008080556002805461043190611f17565b80601f016020809104026020016040519081016040528092919081815260200182805461045d90611f17565b80156104aa5780601f1061047f576101008083540402835291602001916104aa565b820191906000526020600020905b81548152906001019060200180831161048d57829003601f168201915b50505050508060200190518101906104c2919061214d565b90506104eb60408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161053e34156008611399565b6080820151515161055390620f4240906121e2565b8151526080820180515160209081015183519091015251516040908101518251901515910152606082015161059890610591903390620f42406113bf565b6009611399565b81516105b0906001600160a01b03163314600a611399565b6105b86118f4565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915280820180516000908190529051439201919091526080840151835161061592906113d7565b6020820151604001526106278161144b565b5050505050565b61063661185b565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561066557610665611cf6565b14156106dc576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156106a6576106a6611cf6565b60018111156106b7576106b7611cf6565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b6106fc600760005414601e611399565b815161071790158061071057508251600154145b601f611399565b60008080556002805461072990611f17565b80601f016020809104026020016040519081016040528092919081815260200182805461075590611f17565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b50505050508060200190518101906107ba91906121fa565b90506107c461192b565b7f55383e38eb59ee2b4bdc6dc6df107548d496b8406883f6dcf3085a2c9156594533856040516107f592919061228c565b60405180910390a1600060208501515151600281111561081757610817611cf6565b1415610911578151610843906001600160a01b0316331461083957600161083c565b60005b6016611399565b61084f34156017611399565b60608201516040516001600160a01b0390911681527f08a021e137a19fff73ef7910b06b219bab1311638046788bf3a9f769b526ad599060200160405180910390a160608201516001600160a01b031683526108a96118f4565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252608085015181840180519190915280514392019190915260a085015190519091015261090b8161144b565b50610ba5565b600160208501515151600281111561092b5761092b611cf6565b141561098c5761093d34156018611399565b7f22d77a31781bd11192e84474fefdb0ef98ccebc6856ace85f630b42a1b4d5550826020015160405161097291815260200190565b60405180910390a1602080830151908401526108a96118f4565b60026020850151515160028111156109a6576109a6611cf6565b1415610ba5576020840151516060015181526109c13361062e565b602082018190525160009060018111156109dd576109dd611cf6565b14156109ef5760016040820152610a16565b60016020820151516001811115610a0857610a08611cf6565b1415610a1657600060408201525b610a2581604001516019611399565b805151610a5490610a37576000610a4d565b60018360200151610a4891906121e2565b825151105b601a611399565b610a698260200151836080015110601b611399565b610a753415601c611399565b60006020820151516001811115610a8e57610a8e611cf6565b1415610aa05760016060820152610ac7565b60016020820151516001811115610ab957610ab9611cf6565b1415610ac757600060608201525b610ad68160600151601d611399565b604051600081527ff076fc88c627d014478bf6d762f412b6470cd927c07950c0c496aed97ec7023e9060200160405180910390a16000604084810182905233825260046020529020805460ff191660019081178255825151910155610b396118f4565b825181516001600160a01b039182169052602080850151835190910152604080850151835190910152606080850151835192169101526080830151610b80906001906121e2565b602080830180519290925281514391015260a084015190516040015261090b8161144b565b50505050565b610bbb6003600054146010611399565b8151610bd6901580610bcf57508251600154145b6011611399565b600080805560028054610be890611f17565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1490611f17565b8015610c615780601f10610c3657610100808354040283529160200191610c61565b820191906000526020600020905b815481529060010190602001808311610c4457829003601f168201915b5050505050806020019051810190610c7991906122f1565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610cd83415600d611399565b8051610cf0906001600160a01b03163314600e611399565b602080840151805190820151604051610d3e93610d1893929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826020015114600f611399565b610d4661194d565b815181516001600160a01b03918216905260408084015183519083166020918201526060808601805186518501528883015183015186518301528286018051600190529051815190930192909252855182519416939092019290925281514391015260808084015191510152610ba58161155c565b610dcb6006600054146014611399565b8151610de6901580610ddf57508251600154145b6015611399565b600080805560028054610df890611f17565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2490611f17565b8015610e715780601f10610e4657610100808354040283529160200191610e71565b820191906000526020600020905b815481529060010190602001808311610e5457829003601f168201915b5050505050806020019051810190610e89919061234c565b9050610e93611984565b6040805133815285516020808301919091528601515115158183015290517f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213659181900360600190a18151610f01906001600160a01b03163314610ef7576001610efa565b60005b6012611399565b610f0d34156013611399565b610f163361062e565b815260008151516001811115610f2e57610f2e611cf6565b1415610f405760006020820152610f64565b60018151516001811115610f5657610f56611cf6565b1415610f6457600160208201525b8060200151156112ad576080820151611080576080820151604080830180519290925260c084015182516001600160a01b03909116602090910152905190517f1b1376490e63112f7111aa4e5ce28900c62050b12c7ee70d2287a8b7790e3a5291610fce91611dd4565b60405180910390a160408101516060840152610fe861194d565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526060808501518351909101526080840151908201515260a083015161103d906001906123f6565b602080830180519091019190915260c084015181516001600160a01b0390911660409091015280514360609091015260e084015190516080015261090b8161155c565b6000815151600181111561109657611096611cf6565b14156110a857600160608201526110fb565b600181515160018111156110be576110be611cf6565b14156110fb5780516040015160808201819052606083015114156110e857600060a08201526110f0565b600160a08201525b60a081015160608201525b60608101516111eb57606081015160c08201805191909152805133602090910152516040517ff15060ebba56fdcd42cfbebf91c79378f15d0487d3e7bfbaeb2789cecb2729da9161114b91611dd4565b60405180910390a160c0810151606084015261116561194d565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526060808501518351820152830151908201515260a08301516111b7906001906123f6565b602080830180519091019190915280513360409091015280514360609091015260e084015190516080015261090b8161155c565b606081015160e0820180519190915260c083015181516001600160a01b03909116602090910152516040517fa448f763cdb4b019138ea8d686fc8d5a512f4b1ef9196468f8ab6079644522fe9161124191611dd4565b60405180910390a160e0810151606084015261125b61194d565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526060808501518351820152830151908201515260a083015161103d906001906123f6565b6080820151610100820180519190915260c083015181516001600160a01b03909116602090910152516040517fc4f95969962a8156c3b6e2fdabd2390a241a8ff395ec494acea4ddc98a626f279161130491611dd4565b60405180910390a1610100810151606084015261131f61194d565b825181516001600160a01b0391821690526020808501518351908316908201526040808601805185518301526060808801518651820152608080890151858801805191909152925183519095019490945260c088015182519516949092019390935282514391015260e0850151915101526106278161155c565b816102035760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006113cd83853085611628565b90505b9392505050565b6113df611a30565b60005b600181101561142b578481600181106113fd576113fd6121b6565b6020020151828260018110611414576114146121b6565b6020020152806114238161240d565b9150506113e2565b508181846001811061143f5761143f6121b6565b60200201529392505050565b8051602090810151908201515110156114f457611466611a7b565b8151516001600160a01b03908116825282516020908101518184015283516040908101518185015284516060908101519093169284019290925280840180515160808501525182015160a084015260076000554360015590516114cb91839101612466565b604051602081830303815290604052600290805190602001906114ef929190611ac3565b505050565b6114fc611b47565b8151516001600160a01b03908116825282516040908101516020808501919091528451606090810151909316828501528085018051519385019390935291518101516080840152600360005543600155516114cb918391016124c0565b50565b6020808201510151156115ee57611571611b88565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152818501805151608080870191909152815184015160a0870152815183015190941660c0860152519092015160e084015260066000554360015590516114cb91839101612507565b80516020908101519082015160408101516080909101515151611612929190611702565b6000808055600181905561155990600290611be8565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161168f91612570565b60006040518083038185875af1925050503d80600081146116cc576040519150601f19603f3d011682016040523d82523d6000602084013e6116d1565b606091505b50915091506116e282826001611716565b50808060200190518101906116f7919061258c565b979650505050505050565b61170d838383611751565b6114ef57600080fd5b606083156117255750816113d0565b8251156117355782518084602001fd5b60405163100960cb60e01b8152600481018390526024016113b6565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916117b091612570565b60006040518083038185875af1925050503d80600081146117ed576040519150601f19603f3d011682016040523d82523d6000602084013e6117f2565b606091505b509150915061180382826002611716565b5080806020019051810190611818919061258c565b9695505050505050565b6040805160808101825260008082526020808301829052828401829052835180850190945281845283015290606082015290565b905290565b60408051606081019091528060005b815260006020820181905260409091015290565b6040518060400160405280600081526020016118566040805160a08101825260006020808301828152838501839052606084018390528451918201909452908152608082015290815290565b60405180604001604052806000815260200161185660405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611856611c22565b6040805160a0810190915260006080820190815281526020810161186a61185b565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611856611c43565b60405180610120016040528061199861185b565b8152600060208201526040016119be604080518082019091526000808252602082015290565b81526020016000815260200160008152602001600081526020016119f2604080518082019091526000808252602082015290565b8152602001611a11604080518082019091526000808252602082015290565b8152602001611856604080518082019091526000808252602082015290565b60405180602001604052806001905b611a65604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611a3f5790505090565b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001611856611a30565b828054611acf90611f17565b90600052602060002090601f016020900481019282611af15760008555611b37565b82601f10611b0a57805160ff1916838001178555611b37565b82800160010185558215611b37579182015b82811115611b37578251825591602001919060010190611b1c565b50611b43929150611c7b565b5090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001611856611a30565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001611856611a30565b508054611bf490611f17565b6000825580601f10611c04575050565b601f0160209004906000526020600020908101906115599190611c7b565b60405180606001604052806000815260200160008152602001611856611a30565b6040518060a00160405280600081526020016000815260200160006001600160a01b0316815260200160008152602001611856611a30565b5b80821115611b435760008155600101611c7c565b600060408284031215611ca257600080fd5b50919050565b600060408284031215611cba57600080fd5b6113d08383611c90565b6001600160a01b038116811461155957600080fd5b600060208284031215611ceb57600080fd5b81356113d081611cc4565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611d2357611d23611cf6565b808352506020830151151560208301526040830151604083015292915050565b600060208284031215611d5557600080fd5b5035919050565b60005b83811015611d77578181015183820152602001611d5f565b83811115610ba55750506000910152565b8281526040602082015260008251806040840152611dad816060850160208701611d5c565b601f01601f1916919091016060019392505050565b600060608284031215611ca257600080fd5b815181526020918201516001600160a01b03169181019190915260400190565b600060a08284031215611ca257600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611e3f57611e3f611e06565b60405290565b6040516020810167ffffffffffffffff81118282101715611e3f57611e3f611e06565b6040516080810167ffffffffffffffff81118282101715611e3f57611e3f611e06565b6040516060810167ffffffffffffffff81118282101715611e3f57611e3f611e06565b60405160a0810167ffffffffffffffff81118282101715611e3f57611e3f611e06565b801515811461155957600080fd5b600060408284031215611ef157600080fd5b611ef9611e1c565b823581526020830135611f0b81611ed1565b60208201529392505050565b600181811c90821680611f2b57607f821691505b60208210811415611ca257634e487b7160e01b600052602260045260246000fd5b60008183036060811215611f5f57600080fd5b611f67611e1c565b833581526040601f1983011215611f7d57600080fd5b611f85611e1c565b60208581013582526040909501358582015293810193909352509092915050565b60008183036040811215611fb957600080fd5b611fc1611e1c565b833581526020601f1983011215611fd757600080fd5b611fdf611e45565b91506020840135611fef81611ed1565b825260208101919091529392505050565b600081830360a081121561201357600080fd5b61201b611e1c565b833581526080601f198301121561203157600080fd5b612039611e45565b612041611e68565b60208601356003811061205357600080fd5b8152604086013561206381611ed1565b6020820152606086013561207681611ed1565b60408201526020607f198501121561208d57600080fd5b612095611e45565b60809690960135865260608101959095529384526020810193909352509092915050565b80516106e781611cc4565b600082601f8301126120d557600080fd5b6120dd611e45565b806060808501868111156120f057600080fd5b855b818110156121415782818903121561210a5760008081fd5b612112611e8b565b815181526020808301518183015260408084015161212f81611ed1565b908301529086529094019382016120f2565b50919695505050505050565b600060e0828403121561215f57600080fd5b612167611eae565b825161217281611cc4565b808252506020830151602082015260408301516040820152606083015161219881611cc4565b60608201526121aa84608085016120c4565b60808201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156121f5576121f56121cc565b500190565b6000610100828403121561220d57600080fd5b60405160c0810181811067ffffffffffffffff8211171561223057612230611e06565b604052825161223e81611cc4565b808252506020830151602082015260408301516040820152606083015161226481611cc4565b6060820152608083810151908201526122808460a085016120c4565b60a08201529392505050565b6001600160a01b0383168152815160208083019190915282015151805160c083019190600381106122bf576122bf611cf6565b8060408501525060208101511515606084015260408101511515608084015260608101515160a0840152509392505050565b600060e0828403121561230357600080fd5b61230b611eae565b825161231681611cc4565b815260208381015190820152604083015161233081611cc4565b6040820152606083810151908201526121aa84608085016120c4565b6000610140828403121561235f57600080fd5b604051610100810181811067ffffffffffffffff8211171561238357612383611e06565b604052825161239181611cc4565b815261239f602084016120b9565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526123d860c084016120b9565b60c08201526123ea8460e085016120c4565b60e08201529392505050565b600082821015612408576124086121cc565b500390565b6000600019821415612421576124216121cc565b5060010190565b8060005b6001811015610ba557815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161242c565b60006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a08301516124b960a0840182612428565b5092915050565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060808301519082015260808083015160e08301916124b990840182612428565b60006101408201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401526080840151608084015260a084015160a08401528060c08501511660c08401525060e08301516124b960e0840182612428565b60008251612582818460208701611d5c565b9190910192915050565b60006020828403121561259e57600080fd5b81516113d081611ed156fea264697066735822122004e76d392f8b1deb87ee356c3761d86a5ccaa10cca96c8a20f392947765fe2fd64736f6c634300080c0033`,
  BytecodeLen: 11189,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:96:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:140:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:105:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:62:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_acceptToken": Bob_acceptToken,
  "Bob_seeLimit": Bob_seeLimit,
  "Bob_submitNumber": Bob_submitNumber,
  "Bob_viewOutcome": Bob_viewOutcome
  };
export const _APIs = {
  Bob: {
    acceptToken: Bob_acceptToken,
    seeLimit: Bob_seeLimit,
    submitNumber: Bob_submitNumber,
    viewOutcome: Bob_viewOutcome
    }
  };
