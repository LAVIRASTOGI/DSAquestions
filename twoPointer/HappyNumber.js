// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// Constraints:

// 1 <= n <= 231 - 1

// explanation:
// we use a set to store the numbers we have seen so far
// we use a while loop to keep track of the number we are currently on
// we use a function to calculate the sum of the squares of the digits of the number
// we use a function to check if the number is a happy number
// we return true if the number is a happy number, false otherwise

function sumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappy(n) {
  // set checks for infinite loop
  // if the number is not 1 and we have seen it before, we return false
  // if the number is 1, we return true
  // if the number is not 1 and we have not seen it before, we add it to the set and continue
  // if the number is 1, we return true

  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = sumOfSquares(n);
  }
  return n === 1;
}

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(10));
console.log(isHappy(13));
console.log(isHappy(23));
console.log(isHappy(29));
console.log(isHappy(100));
