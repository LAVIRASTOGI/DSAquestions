var search = function (nums, target) {
  let lengthArr = nums.length;
  let count = 0;
  let r = lengthArr - 1;

  while (count < lengthArr) {
    if (nums[0] === target) {
      return count;
    } else {
      count++;
      nums[r + 1] = nums.shift();
    }
  }

  return -1;
};

search([4, 5, 6, 7, 0, 1, 2], 10);
