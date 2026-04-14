var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let min = nums[left];
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[left] <= nums[right]) {
      if (min >= nums[left]) {
        min = nums[left];
        return min;
      }
      break;
    } else {
      if (nums[left] <= nums[middle]) {
        if (min > nums[left]) {
          min = nums[left];
        }
        left = middle + 1;
      } else {
        if (min > nums[middle]) {
          min = nums[middle];
        }
        right = middle - 1;
      }
    }
  }
  return min;
};

console.log(findMin([4, 5, 1, 2, 3]));
