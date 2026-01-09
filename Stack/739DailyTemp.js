/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let resultArr = [];
  let n = temperatures.length;
  resultArr[n - 1] = 0;
  stack.push(n - 1);
  for (let i = n - 2; i >= 0; i--) {
    if (temperatures[i] < temperatures[stack[stack.length - 1]]) {
      resultArr[i] = stack[stack.length - 1] - i;
    } else {
      while (stack.length) {
        if (temperatures[i] >= temperatures[stack[stack.length - 1]]) {
          stack.pop();
        } else {
          resultArr[i] = stack[stack.length - 1] - i;
          break;
        }
        if (stack.length === 0) {
          resultArr[i] = 0;
        }
      }
    }
    stack.push(i);
  }
  console.log(resultArr);
  return resultArr;
};

dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]);
