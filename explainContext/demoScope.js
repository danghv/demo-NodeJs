// function displayColor () {
//     let color = 'green'
//     return color;
// }
// console.log(displayColor());

var sum = function(a, b) {
    return a + b;
  };
  
  var add5 = sum.bind(null, 5);
  console.log(add5(10));