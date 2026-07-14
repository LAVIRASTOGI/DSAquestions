// Question
// Given an array of integers and a number k, find the maximum sum of any contiguous subarray having exactly k elements.

// Example
// Input: nums = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9

// Explanation:
// [2, 1, 5] → sum = 8
// [1, 5, 1] → sum = 7
// [5, 1, 3] → sum = 9
// [1, 3, 2] → sum = 6

// Maximum sum = 9

function maxSumSubarray(nums, k) {
  if (k > nums.length || k <= 0) {
    return null;
  }

  let windowSum = 0;

  // Calculate the first window sum
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // Slide the window
  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right]; // Add new element
    windowSum -= nums[right - k]; // Remove old element

    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9
