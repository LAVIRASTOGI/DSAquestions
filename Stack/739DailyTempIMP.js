/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = Array(temperatures.length).fill(0);
  const stack = []; // indexes

  // Start from the right side
  for (let i = n - 1; i >= 0; i--) {
    // Remove all elements that are smaller than
    // or equal to the current element
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    // Top element is the next greater element
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }

    // Add current element for elements on its left
    stack.push(i);
  }

  return result;
};

dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]);
