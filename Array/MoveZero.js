// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

//explaination
//we are using two pointers to move the zeros to the end of the array
//we are using a for loop to iterate through the array
//we are using an if statement to check if the current element is not zero
//we are using a for loop to iterate through the array again
//we are using an if statement to check if the current element is zero

function moveZero(nums) {
  let p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p1] = nums[i];
      p1++;
    }
  }
  for (let i = p1; i < nums.length; i++) {
    nums[i] = 0;
  }
}
