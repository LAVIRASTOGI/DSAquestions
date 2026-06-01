var rotate = function (nums, k) {
  let valueRotate = k % nums.length;
  for (let i = 1; i <= k; i++) {
    let val = nums.pop();
    nums.unshift(val);
  }
  return nums;
};

rotate([1, 2, 3, 4, 5], 3);
