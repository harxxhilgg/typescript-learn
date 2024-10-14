// the never keyword is used to indiate that a function will not return anything, or that a variable can never have a value. The never tpe is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch erros at compile-time instead of runtime.


// uses? 
// 1. A fn that always throws an error
// 2. A fn that has an infinite loop 
// 3. A variable that has no value

// 1. A fn that always throws an error

function throwError(msg: string): never {
  throw new Error(msg);
}

// 2.

function infiniteLoop(): never {
  while (true) {}
}

// 3.

let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns()