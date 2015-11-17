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
};


function randomRunningbackOne(RBs) {

  RB1 = [];

  var arrayOfAllKeys = Object.keys(RBs);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    RB1.push(objKey, RBs[objKey]);
    Roster.push(RB1);
  }
}


function randomRunningbackTwo(RBs) {

  RB2 = [];

  var arrayOfAllKeys = Object.keys(RBs);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    RB2.push(objKey, RBs[objKey]);
    Roster.push(RB2);
  }
}


function randomWideoutOne(WRs) {

  WR1 = [];

  var arrayOfAllKeys = Object.keys(WRs);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    WR1.push(objKey, WRs[objKey]);
    Roster.push(WR1);
  }
}




function randomWideoutTwo(WRs) {

  WR2 = [];

  var arrayOfAllKeys = Object.keys(WRs);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    WR2.push(objKey, WRs[objKey]);
    Roster.push(WR2);
  }
}



function randomWideoutThree(WRs) {

  WR3 = [];

  var arrayOfAllKeys = Object.keys(WRs);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    WR3.push(objKey, WRs[objKey]);
    Roster.push(WR3);
  }
}



function randomTEone(TEs) {

  TE1 = [];

  var arrayOfAllKeys = Object.keys(TEs);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    TE1.push(objKey, TEs[objKey]);
    Roster.push(TE1);
  }
}




function randomKicker(Ks) {

  K1 = [];

  var arrayOfAllKeys = Object.keys(Ks);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    K1.push(objKey, Ks[objKey]);
    Roster.push(K1);
  }
}


function randomDEF(DEFs) {

  DEF1 = [];

  var arrayOfAllKeys = Object.keys(DEFs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    DEF1.push(objKey, DEFs[objKey]);
    Roster.push(DEF1);
  }
}

//////////////////////////////////////////////////
      // Roster Compiler & Duplicate Filter
//////////////////////////////////////////////////

function rosterConstruction() {
  randomQuarterback(QBs);
  randomRunningbackOne(RBs);
  randomRunningbackTwo(RBs);
  randomWideoutOne(WRs);
  randomWideoutTwo(WRs);
  randomWideoutThree(WRs);
  randomTEone(TEs);
  randomKicker(Ks);
  randomDEF(DEFs);

  for(var i = 0; i < Roster.length; i++) {
    for(var j = i + 1; j < Roster.length;) {
      if(Roster[i][0] == Roster[j][0] && Roster[i][1] == Roster[j][1])
          // Found the same. Remove it.
          Roster.splice(j, 1);
      else
          // No match. Go ahead.
          j++;
    }
  }
};
rosterConstruction();
console.log(Roster);


//////////////////////////////////////////////////
                // Salary Cap Check
//////////////////////////////////////////////////

function salaryCheck(currentRoster) {
  var i = 0;
  var checker = [];
  for(i; i < currentRoster.length; i++) {
    checker.push(currentRoster[i][1]);
  }
  var sum = checker.reduce(add, 0);

  function add(a, b) {
    return a + b;
  }
  return sum;
};

var totalSalary = salaryCheck(Roster);
console.log(totalSalary);

//////////////////////////////////////////////////
                // Final Compiler
//////////////////////////////////////////////////

function doubleCheck(currentRoster, currentSalary) {
  while(currentRoster.length < 9 && currentSalary < 60000) {
    Roster = [];
    console.log(Roster);
    rosterConstruction();
    console.log(Roster);
    salaryCheck(Roster);
    console.log(Roster);
  }
  // return Roster;
};
doubleCheck(Roster, totalSalary);
console.log(Roster);
console.log(totalSalary);

//////////////////////////////////////////////////
                // Duplicates Filer
//////////////////////////////////////////////////

// function eliminateDuplicates(currentRoster) {

//   var i;
//   len=currentRoster.length;
//   console.log(len);
//   deDuppedRoster = [];
//   obj={};

//   for (i=0;i<len;i++) {
//     obj[currentRoster[i]]=0;
//   }
//   for (i in obj) {
//     deDuppedRoster.push(i);
//   }
//   return deDuppedRoster;
// };

// eliminateDuplicates(Roster);
// console.log(deDuppedRoster)

//////////////////////////////////////////////////
                // Salary Cap Check
//////////////////////////////////////////////////



//////////////////////////////////////////////////
                // Final Compiler
//////////////////////////////////////////////////





// function doubleCheck(currentRoster, currentSalary) {
//   while(currentRoster.length < 9 && currentSalary < 50000) {
//     Roster = [];
//     console.log(Roster);
//     rosterConstruction();
//     console.log(Roster);
//     salaryCheck(Roster);
//     console.log(Roster);
//   }
// };
// doubleCheck(Roster, totalSalary);


