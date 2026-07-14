/**
 * @param {number[]} nums
 * @return {number[]}
 *
 *
 */

// Input: nums = [1, 2, 3, 4]
// Output: [9, 8, 7, 6]

// ans --
// answer[i] =
// (product of everything on the left)
// ×
// (product of everything on the right)
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};
