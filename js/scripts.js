var SalaryCap = 60000;

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

var RB = {};

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

function randomQuarterbackTwo(QBs) {

  var QB = [];

  var arrayOfAllKeys = Object.keys(QBs);
  // console.log(arrayOfAllKeys);

  for(var i=0; i<1; i++){

    var rnd = Math.floor(Math.random()*arrayOfAllKeys.length);

    var objKey = arrayOfAllKeys[rnd];

    QB.push(objKey, QBs[objKey]);
    // console.log(QB);
  }
  return QB;
};


randomQuarterbackTwo(QBs);
