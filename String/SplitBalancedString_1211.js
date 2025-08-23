// Split a String in Balanced Strings
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Constraints:

// 2 <= s.length <= 1000
// s[i] is either 'L' or 'R'.
// s is a balanced string.

// Time Complexity: O(n)
// Space Complexity: O(1)

//steps
//1. we can use a balance variable to keep track of the number of 'L' and 'R' characters.
//2. if 'R' is found, we increment the balance.
//3. if 'L' is found, we decrement the balance.
//4. if the balance is 0 and we have a balanced string we can increment the count.
//5. we can return the count.

var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      balance++;
    } else {
      balance--;
    }
    if (balance === 0 && i > 0) {
      count++;
    }
  }
  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("LLLLRRRR"));
