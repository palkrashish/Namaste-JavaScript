// alert("hello closure")

function x() {
  let a = 25;
  function y() {
    console.log(a);
  }
  y();
}

x();
