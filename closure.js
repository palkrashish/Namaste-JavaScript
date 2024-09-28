// alert("hello closure")

function x() {
//   let a = 25;
  function y() {
    let a = 20 
    console.log(a); //20
  }
//   console.log(a) // 25
//   y();

return y;
}

var z = x();
console.log(z) // here print all the function of "y"


z(); // 25


/** 
 * 25 
 * 20
*/