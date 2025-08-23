// 541. Reverse String II
// Easy

// Companies
// Given a string s and an integer k,
// reverse the first k characters for every 2k characters
// counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

// Time Complexity: O(n) - will not be O(n^2) because nested loop is very small
// Space Complexity: O(n)

//explaination
//we will use a for loop to iterate through the string
//we will use a nested for loop to reverse the first k characters
//we will use a temp variable to swap the characters
//we will use a join method to join the array back into a string
//we will return the string

var reverseStr = function (s, k) {
  // as string is immutable we wll create a array
  // 0 // 0+4
  // 4  //
  // 8
  //
  s = s.split("");
  for (let i = 0; i < s.length; i = i + 2 * k) {
    let n = k; //0,1
    let mid = Math.floor(k / 2);
    for (let j = 0; j < mid; j++) {
      let temp = s[j];
      s[j] = s[i + n - 1 - j];
      s[i + n - 1 - j] = temp;
    }
  }

  return s.join("");
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
