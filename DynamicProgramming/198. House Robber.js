/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let resultArr = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    resultArr[i] = Math.max(resultArr[i - 1], resultArr[i - 2] + nums[i]);
  }
  return resultArr[nums.length - 1];
};
rob([1, 2, 3, 1, 8]);
