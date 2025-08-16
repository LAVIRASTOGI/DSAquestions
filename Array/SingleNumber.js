// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// in this question we are using bitwise XOR to find the single number
// bitwise XOR is a binary operation that takes two bits and returns 1 if the bits are different and 0 if the bits are the same
// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 0

// here Each element in the array appears twice except for one element which appears only once.
// so when we xor all the numbers in the array, the numbers that appear
//  twice will cancel out and we will be left with the single number

// explaination
// step 1 - we are using a for loop to iterate through the array
// step 2 - we are using a bitwise XOR to find the single number
// step 3 - we are returning the result

// time complexity - O(n)
// space complexity - O(1)
function singleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    // bitwise XOR -with same number it will give 0

    // 0 ^ 0 = 0
    // 0 ^ 1 = 1
    // 1 ^ 0 = 1
    // 1 ^ 1 = 0
    // 1 ^ 1 ^ 1 = 1
    // 1 ^ 1 ^ 1 ^ 1 = 0
    result = result ^ nums[i];
    console.log(result);
  }
  return result;
}

// next way to solve this question - using object - easy to understand
// we are using a for loop to iterate through the array
// we are using an if statement to check if the number is in the object
// if it is, we are incrementing the value of the number
// if it is not, we are adding the number to the object with the value 1
// finally, we are returning the single number

// time complexity - O(n)
// space complexity - O(n)
function singleNumber2(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
}
console.log(singleNumber([4, 1, 2, 1, 2]));
