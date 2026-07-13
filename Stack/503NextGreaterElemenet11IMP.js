/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

//soln-- anything soln circular is there just dounble the arr
var nextGreaterElements = function (nums) {
  let stack = [];
  let nums2 = [...nums, ...nums];
  let n = nums2.length;
  let resultArr = [];

  stack.push(nums2[n - 1]);
  resultArr[n - 1] = -1;
  // first find greatest element for all elementswith help of stack

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (nums2[i] < top) {
      resultArr[i] = top;
    } else {
      while (stack.length) {
        if (stack[stack.length - 1] <= nums2[i]) {
          stack.pop();
        } else {
          resultArr[i] = stack[stack.length - 1];
          break;
        }
      }
      if (stack.length === 0) {
        resultArr[i] = -1;
      }
    }

    stack.push(nums2[i]);
  }
  return resultArr.slice(0, nums.length);
};

nextGreaterElements([1, 2, 1]);
