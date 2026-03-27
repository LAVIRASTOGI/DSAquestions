/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let first = 0;
  let second = numbers.length - 1;
  while (first < second) {
    let totalSum = numbers[first] + numbers[second];
    if (totalSum === target) {
      return [first+1, second+1];
    }
    if (totalSum > target) {
      second--;
    } else {
      first++;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
