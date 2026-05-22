/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `delay` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func, delay) {
  let flag = false;
  let lastResult;
  return function (...args) {
    if (!flag) {
      lastResult = func.apply(this, args);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, delay);
    }
    return lastResult;
  };
}

// Write your code here

const throttledFn = throttle(() => "hiii", 100);
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());
console.log(throttledFn());

module.exports = throttle;
