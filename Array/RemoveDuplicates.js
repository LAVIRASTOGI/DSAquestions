// // question: remove duplicates from an array
// // i/p [1,2,2,3,4,4,5]
// // o/p [1,2,3,4,5,6]

let arr = [1, 2, 2, 3, 4, 4, 5];

// // 3 methods

// // 1. using forEach
// function removeDuplicates(arr) {
//   let unique = [];
//   arr.forEach((ele) => {
//     if (!unique.includes(ele)) {
//       unique.push(ele);
//     }
//   });

//   // 2. using set
//   //   let unique = [...new Set(arr)];

//   // 3. using reduce
//   //   let unique = [];
//   //   unique = arr.reduce(
//   //     (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
//   //     []
//   //   );
//   return unique;
// }

// console.log(removeDuplicates(arr));

// ques --- Remove Duplicates from Sorted Array
// Task: Given an integer array nums sorted in non-decreasing order,
//  remove duplicates in-place so that each unique element appears only once. The relative order of elements must be preserved.

// Return: k — the number of unique elements.
// In-place requirement: Modify nums so that the first k elements contain the unique values in their original order. The elements beyond k don’t matter.

// Examples
// Input: nums = [1,1,2] → Output: k = 2, nums = [1,2,_]
// Input: nums = [0,0,1,1,1,2,2,3,3,4] → Output: k = 5, nums = [0,1,2,3,4,_ , _ , _ , _ , _]

// Constraints
// 1 <= nums.length <= 3 * 10^4
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

// use 2 pointer

function removeDuplicates(nums) {
  let x = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      ++x;
      nums[x] = nums[i];
    }
  }

  nums.fill("_", x + 1);
  console.log(nums);
  return x + 1;
}

console.log(removeDuplicates(arr));
