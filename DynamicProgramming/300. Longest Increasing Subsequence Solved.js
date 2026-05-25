// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);
  let lisLength = 1;

  for (let i = 1; i < n; i++) {
    // find largest subsequence
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
        lisLength = Math.max(lisLength, dp[i]);
      }
    }
  }
  return lisLength;
};
