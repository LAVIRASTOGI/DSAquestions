// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// we can also use brute force but pointer is better soln --

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left <= right) {
    const areaVal = Math.min(height[left], height[right]) * (right - left);
    if (maxArea < areaVal) {
      areaVal = maxArea;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
