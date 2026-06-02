// Code
// Testcase
// Testcase
// Test Result
// 392. Is Subsequence
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // s- partial str t-fullStr
  let partialStr = 0;
  let fullStr = 0;
  while (partialStr < s.length && fullStr < t.length) {
    if (s[partialStr] === t[fullStr]) {
      partialStr++;
      fullStr++;
    } else {
      fullStr++;
    }
  }

  if (fullStr === t.length && partialStr !== s.length) {
    return false;
  } else {
    return true;
  }
};

console.log(isSubsequence("axc", "ahbgdc"));
