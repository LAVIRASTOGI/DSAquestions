// var search = function (nums, target) {
//   let lengthArr = nums.length;
//   let count = 0;
//   let r = lengthArr - 1;

//   while (count < lengthArr) {
//     if (nums[0] === target) {
//       return count;
//     } else {
//       count++;
//       nums[r + 1] = nums.shift();
//     }
//   }

//   return -1;
// };

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    // left sorted
    if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // right sorted
      if (nums[middle] < nums[right]) {
        if (target > nums[middle] && target <= nums[right]) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
    }
  }
  return -1;
};

console.log(search([1], 0));
