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

var WR ={};

var TE = {};

var K = {};

var DEF = {};

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
    console.log(QB);
    Roster.push(QB);
    console.log(Roster);
  }
  return QB;
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
    console.log(Roster);
  }
  return RB1;

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
    console.log(Roster);
  }
  return RB2;

}

randomRunningbackTwo(RBs);




