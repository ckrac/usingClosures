function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var position = 0;
  var cheatRoll;
  var emptyArray = []

  return function() {
    /* your code here */
    emptyArray.push(list[position]);
    var diceRolled = emptyArray[position];
    position++;
    return diceRolled;


  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6