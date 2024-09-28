// alert("hello closure")

function x() {
  let a = 25;
  function y() {
    let a = 20 
    console.log(a); //20
  }
  console.log(a) // 25
  y();
}

x();


/** 
 * 25 
 * 20
*/