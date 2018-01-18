// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   /* your code here */
//   var position = 0;
//   var cheatRoll;
//   var emptyArray = []

//   return function() {
//     /* your code here */
//     if(position >= list.length) {
//       position = 0;
//       emptyArray.push(list[position]);
//       var diceRolled = emptyArray[position];
//       position++;
//       return diceRolled;
//     } else {
//       emptyArray.push(list[position]);
//       var diceRolled = emptyArray[position];
//       position++;
//       return diceRolled;
//     }


//   }
// }

// var rollLoadedDie = makeLoadedDie();


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var position = -1;
  var pOver = 0;
  // var emptyArray = []

  return function() {
    /* your code here */
    if(position >= list.length -1) {
      position = -1;
      return list[pOver];
    } else {
      position++;
      return list[position];
    }


  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());



