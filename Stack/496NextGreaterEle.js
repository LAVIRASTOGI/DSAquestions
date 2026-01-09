/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let result = {};
  let n = nums2.length;
  let resultArr = [];

  stack.push(nums2[n - 1]);
  result[nums2[n - 1]] = -1;
  // first find greatest element for all elementswith help of stack

  for (let i = nums2.length - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (nums2[i] < top) {
      result[nums2[i]] = top;
    } else {
      while (stack.length) {
        if (stack[stack.length - 1] < nums2[i]) {
          stack.pop();
        } else {
          result[nums2[i]] = stack[stack.length - 1];
          break;
        }
      }
      if (stack.length === 0) {
        result[nums2[i]] = -1;
      }
    }

    stack.push(nums2[i]);
  }

  for (let i = 0; i < nums1.length; i++) {
    resultArr.push(result[nums1[i]]);
  }

  return resultArr;
};

nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]);
