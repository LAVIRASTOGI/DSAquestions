var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = [-1, -1];

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] === target) {
      ans[0] = middle;
      right = middle - 1;
    }
  }

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] === target) {
      ans[1] = middle;
      left = middle + 1;
    }
  }

  return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
