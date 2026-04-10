// o(n)
// var findPeakElement = function (nums) {
//   let maxIndex = -1;
//   if (nums.length === 1) {
//     return 0;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (i == 0 && nums[i] > nums[i + 1]) {
//       maxIndex = 0;
//     }
//     if (i === nums.length - 1 && nums[i] > nums[i - 1]) {
//       maxIndex = i;
//     }
//     if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) {
//       maxIndex = i;
//     }
//   }

//   return maxIndex;
// };

// console.log(findPeakElement([1, 2]));

//binary search o(logn)

var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    let middle = Math.floor((l + r) / 2);
    if (nums[middle] < nums[middle + 1]) {
      l = middle + 1;
    } else {
      r = middle;
    }
  }

  return l;
};
