// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// time complexity: O(n)
// n(trim) + n(loop)+o(n)=o(n)
// space complexity: O(n)

// var lengthOfLastWord = function (s) {
//   let str = s.trim().split(" ");
//   return str[str.length - 1].trim().length;
// };

// time complexity: O(n)
// space complexity: O(1)
var lengthOfLastWord = function (s) {
  // 1. trim the string
  let n = s.length - 1;
  while (n > 0) {
    if (s[n] !== " ") {
      break;
    }
    n--;
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      n--;
      count++;
    } else {
      break;
    }
  }
  return count;
};

// in one loop
// time complexity: O(n)
// space complexity: O(1)

var lengthOfLastWord = function (s) {
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
};
console.log(lengthOfLastWord("Hello World"));
