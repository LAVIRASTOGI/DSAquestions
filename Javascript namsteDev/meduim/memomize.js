function memoize(fn) {
  let cache = {};
  // write code here
  return function (...args) {
    let key = args
      .map((ele) => {
        if ((typeof ele === "object", typeof ele !== null)) {
          JSON.stringify(Object.entries(ele).sort());
        }
        return JSON.stringify(ele);
      })
      .join("|");
    let result = fn.apply(this, args);
    if (cache[key]) {
      //   console.log("cached", cache[key]);
      return cache[key];
    } else {
      //   console.log("fresh", result);
      cache[key] = result;
      return result;
    }
  };
}
function sum(a, b) {
  return a + b;
}
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

let x = memoize(factorial);
x(5);
x(10);
x(9);
x(10);

let sum1 = memoize(sum);
sum1(1, 2);
sum1(1, 2);
sum1(2, 1);
module.exports = memoize;
