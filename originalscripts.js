var SalaryCap = 60000;

var Roster = [];

var QBs = {
  DrewBrees : 8000,
  MattRyan : 7000,
  MatthewStafford : 6000,
  TomBrady : 10000,
  JayCutler : 6500,
  AaronRodgers : 9000,
  PhillipRivers : 8500,
  TeddyBridgewater : 6000

};

var RBs = {
  AdrianPeterson : 9000,
  ToddGurley : 9500,
  DevontaFreeman : 8500,
  FrankGore : 7000,
  MattForte : 7500,
  ArianFoster : 8000
};

var WRs ={
  DeAndreHopkins : 8900,
  OdellBeckhamJr : 8800,
  AntonioBrown : 8700,
  AJGreen : 8300,
  DezBryant : 8100,
  JulianEdelman : 8000,
  CalvinJohnson : 8000,
  DemaryiusThomas : 7900,
  EmmanuelSanders : 7800,
  RandallCobb : 7700,
  MikeEvans : 7700,
  // AlshonJeffery : 7600,
  // AllenRobinson : 7500,
  // LarryFitzgerald : 7400,
  // AllenHurns : 7300,
  // BrandinCooks : 7200,
  // AmariCooper : 7100,
  // JarvisLandry : 7000,
  // StefonDiggs : 6600,
  // JordanMatthews : 6600,
  // MartavisBryant : 6500,
  // JeremyMaclin: 6500,
  // WillieSnead : 6500,
  // PierreGarcon : 6400
};

var TEs = {
  RobGronkowski : 8000,
  GregOlsen : 6300,
  TylerEifert : 6200,
  GaryBarnidge : 6100,
  JimmyGraham : 6000,
  DelanieWalker : 5900,
  JordanReed : 5800,
  TravisKelce : 5800,
  JasonWitten : 5600,
  BenjaminWatson : 5500,
  RichardRodgers : 5400
};

var Ks = {
  StephenGostkowski : 5100,
  CalebSturgis : 5000,
  StevenHauschka : 5000,
  MasonCrosby : 5000,
  BlairWalsh : 4900,
  JustinTucker : 4900,
  BrandonMcManus : 4800,
  JoshBrown : 4800,
  ConnorBarth : 4800,
  KaiForath : 4700,
  ChandlerCantanzaro : 4700
};

var DEFs = {
  StLouisRams : 5400,
  DenverBroncos : 5200,
  CincinattiBengals : 5000,
  SeattleSeahawks : 4900,
  NewEnglandPatriots : 4900,
  GreenBayPackers : 4900,
  ArizonaCardinals : 4700,
  CarolinaPanthers : 4700,
  PhiladelphiaEagles : 4700,
  PittsburghSteelers : 4600,
  DallasCowboys : 4600,
  MinnesotaVikings : 4500,
  NewYorkGiants : 4500,
  MiamiDolphins : 4500,
  BaltimoreRavens : 4400
};

// function randomQuarterBack(QBs) {
//   var QB = [];
//   var keys = Object.keys(QBs),
//     length = keys.length;
//     console.log(length);
//     console.log(keys);
//   var i;
//   for (i = 0; i < 1; i++) {
//     QB.push(QBs[keys[Math.floor(Math.random() * length)]]);
//     console.log(QB);
//     console.log();

// }
// return QB;
// }

// randomQuarterBack(QBs);

function randomQuarterback(QBs) {

  var QB = [];

  var arrayOfAllKeys = Object.keys(QBs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    QB.push(objKey, QBs[objKey]);
    Roster.push(QB);
  }
  // return QB;
};

randomQuarterback(QBs);

function randomRunningbackOne(RBs) {

  RB1 = [];

  var arrayOfAllKeys = Object.keys(RBs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    RB1.push(objKey, RBs[objKey]);
    // console.log(RB2);
    Roster.push(RB1);
  }
  // return RB1;

}

randomRunningbackOne(RBs);

function randomRunningbackTwo(RBs) {

  RB2 = [];

  var arrayOfAllKeys = Object.keys(RBs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    RB2.push(objKey, RBs[objKey]);
    // console.log(RB2);
    Roster.push(RB2);
  }
  // return RB2;

}

randomRunningbackTwo(RBs);

function randomWideoutOne(WRs) {

  WR1 = [];

  var arrayOfAllKeys = Object.keys(WRs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    WR1.push(objKey, WRs[objKey]);
    // console.log(RB2);
    Roster.push(WR1);
  }
  // return WR1;

}

randomWideoutOne(WRs);


function randomWideoutTwo(WRs) {

  WR2 = [];

  var arrayOfAllKeys = Object.keys(WRs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    WR2.push(objKey, WRs[objKey]);
    // console.log(RB2);
    Roster.push(WR2);
  }
  // return WR2;

}

randomWideoutTwo(WRs);


function randomWideoutThree(WRs) {

  WR3 = [];

  var arrayOfAllKeys = Object.keys(WRs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    WR3.push(objKey, WRs[objKey]);
    // console.log(RB2);
    Roster.push(WR3);
  }
  // return WR3;

}

randomWideoutThree(WRs);

function randomTEone(TEs) {

  TE1 = [];

  var arrayOfAllKeys = Object.keys(TEs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    TE1.push(objKey, TEs[objKey]);
    // console.log(RB2);
    Roster.push(TE1);
  }
  // return TE1;

}

randomTEone(TEs);


function randomKicker(Ks) {

  K1 = [];

  var arrayOfAllKeys = Object.keys(Ks);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    K1.push(objKey, Ks[objKey]);
    // console.log(RB2);
    Roster.push(K1);
  }
  // return K1;

}

randomKicker(Ks);


function randomDEF(DEFs) {

  DEF1 = [];

  var arrayOfAllKeys = Object.keys(DEFs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    DEF1.push(objKey, DEFs[objKey]);
    // console.log(RB2);
    Roster.push(DEF1);
  }
  // return DEF1;

}

randomDEF(DEFs);

function eliminateDuplicates(roster) {

  var i;
  len=roster.length;
  console.log(len);
  finalRoster=[];
  obj={};

  for (i=0;i<len;i++) {
    obj[roster[i]]=0;
  }
  for (i in obj) {
    finalRoster.push(i);
    // console.log(finalRoster);
    // return finalRoster;
  }
  // console.log(finalRoster);
  // console.log(finalRoster);
  // console.log(finalRoster);
  return finalRoster;
};

eliminateDuplicates(Roster);
// console.log(noDuplicates);
console.log(Roster);

  while(finalRoster.length < 9) {
    Roster = [];
    randomQuarterback(QBs);
    randomRunningbackOne(RBs);
    randomRunningbackTwo(RBs);
    randomWideoutOne(WRs);
    randomWideoutTwo(WRs);
    randomWideoutThree(WRs);
    randomTEone(TEs);
    randomKicker(Ks);
    randomDEF(DEFs);
    eliminateDuplicates();
    console.log(finalRoster);

  }
  console.log(finalRoster);


console.log(Roster);

// var

// var rRoster = eliminateDuplicates(Roster);

// console.log(rRoster);








      // Roster = [];
      // randomQuarterback(QBs);
      // randomRunningbackOne(RBs);
      // randomRunningbackTwo(RBs);
      // randomWideoutOne(WRs);
      // randomWideoutTwo(WRs);
      // randomWideoutThree(WRs);
      // randomTEone(TEs);
      // randomKicker(Ks);
      // randomDEF(DEFs);
      // console.log(Roster);
      // return Roster;


