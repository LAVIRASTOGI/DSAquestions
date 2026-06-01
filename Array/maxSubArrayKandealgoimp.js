// Kadane’s Algorithm is a technique to find the maximum sum
//  of a contiguous subarray in O(n) time.

// Contiguous means elements should be continuous, without skipping.

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//  At every index, Kadane’s Algorithm decides:

// Should I continue the previous subarray?
// or
// Should I start a new subarray from current number?

function maxSubArray(arr) {
  let currSum = arr[0];
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

maxSubArray(nums);
