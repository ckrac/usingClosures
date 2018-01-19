var countdownGenerator = function (x) {
  /* your code here */
/// at this point you have x = 3
  var position = -1;
  var pOver = 0
  var countList = [];
  var lastBreak;
  for (var i = x; i > 0; i--) {
    countList.push(i);
  }
  // console.log(countList.length);
  // console.log(countList);


  return function() {
    // console.log(x);
    if (position <= countList.length) {
      position++;
      var count = position + 1;
      console.log("T-minus " + countList[position] + "...");
        if(count === countList.length) {
          position = countList.length + 1;
          lastBreak = position;
          // console.log(position);
          // console.log(lastBreak);
        }
    } else if (lastBreak === position) {
      position++;
      console.log("Blast off")
    } else {
      console.log("Rockets already gone, bub!")
    }
  };


};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


