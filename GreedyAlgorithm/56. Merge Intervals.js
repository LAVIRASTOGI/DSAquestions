// 56. Merge Intervals
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Example 3:

// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // sorting array
  let newInterval = intervals.sort((a, b) => a[0] - b[0]);

  // merge overlapping,nonoverlapping
  let ans = [newInterval[0]];

  for (let i = 1; i < newInterval.length; i++) {
    // overlapping
    if (ans[ans.length - 1][1] >= newInterval[i][0]) {
      ans[ans.length - 1][1] = Math.max(
        newInterval[i][1],
        ans[ans.length - 1][1],
      );
    } else {
      ans.push(newInterval[i]);
    }
  }
  return ans;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
