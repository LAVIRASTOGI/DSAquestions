/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let newArr = [];
  let i = 0;
  // mereg left side
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    newArr.push(intervals[i]);
    i++;
  }

  // merge

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  newArr.push(newInterval);
  // right mereg
  while (i < intervals.length) {
    newArr.push(intervals[i]);
    i++;
  }

  return newArr;
};
insert(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8],
);
