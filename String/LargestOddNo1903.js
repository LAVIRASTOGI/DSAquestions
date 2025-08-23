// 1903. Largest Odd Number in String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zero

// Time Complexity: O(n)
// Space Complexity: O(1)

//explaination
//we will use a for loop to iterate through the string
//we will use a if statement to check if the number is odd
//we will use a slice method to get the substring
//we will return the substring

var largestOddNumber = function (num) {
  let num1 = "";
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 == 1) {
      num1 = num.slice(0, i + 1);
      break;
    }
  }
  return num1;
};

console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));
