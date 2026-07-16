function curry(fn) {
  return function curried(...args) {
    // tells about paramters
    if (args.length >= fn.length) {
      fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

//For the purpose of user debugging.
//pass appropriate input in below function call
curry();
module.exports = curry;

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6