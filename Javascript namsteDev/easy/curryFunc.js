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
