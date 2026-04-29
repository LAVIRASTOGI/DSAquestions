/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let l1 = 0;
  letl2 = 0;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] == nums[middle - 1]) {
      l1 = middle - 1 - left;
      l2 = right - middle;
      if (l1 % 2 !== 0) {
        right = middle - 2;
      } else {
        left = middle + 1;
      }
    } else if (nums[middle] == nums[middle + 1]) {
      l1 = middle - left;
      l2 = right - (middle + 1);
      if (l1 % 2 !== 0) {
        right = middle - 1;
      } else {
        left = middle + 2;
      }
    } else {
      return nums[middle];
    }
  }
};
