// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// here we need to find maxleft maxright  and find the water  trapped
var trap = function (height) {
  let maxleft = [];
  maxleft[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxleft[i] = Math.max(maxleft[i - 1], height[i]);
  }

  let maxRight = [];
  let lengthVal = height.length;
  maxRight[lengthVal - 1] = height[lengthVal - 1];
  for (let i = lengthVal - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);
  }

  // found maxLeft and maxRight

  //  now run a loop and take a min btw maxL,maxR
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    let maxValue = Math.min(maxleft[i], maxRight[i]) - height[i];
    ans = ans + maxValue;
  }
  return ans;
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
