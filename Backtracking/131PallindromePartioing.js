// 131. Palindrome Partitioning
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {string[][]}
 */

const isPallindrome = (str) => {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
};
var partition = function (s) {
  let results = [];
  function backtracking(path, remainingStr) {
    if (!remainingStr.length) {
      results.push([...path]);
    }
    for (let i = 1; i <= remainingStr.length; i++) {
      let choice = remainingStr.substring(0, i);
      if (!isPallindrome(choice)) continue;
      path.push(choice);
      backtracking(path, remainingStr.substring(i));
      path.pop();
    }
  }

  backtracking([], s);

  return results;
};
