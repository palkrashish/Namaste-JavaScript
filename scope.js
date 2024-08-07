// function a() {
//   console.log(b); //10 //20
// }

// // var b = 10;
// let b = 20;

// a();

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();

// Scope -  Scope means, where you can access a specific variable of function in our code that is scope.

// Lexical Environmen
// - Whenever js program executed first create Global Execution Create. 1- Memory, 2- Code
// - Lexical environment is created when ever execution is created.
// - Lexical env is local memory + lexical env parent
// - Lexical mean, it's a hierarcy or in a sequence
// - This hole chain of environment is know as the Scope Chain. It is defines whether variable and function present
// inside in the scope or not if the scope is not executed and variable is not found that means it's not scope chain

// - JS is loosely typed language. (Means you can attach anything like number + string + special character)
