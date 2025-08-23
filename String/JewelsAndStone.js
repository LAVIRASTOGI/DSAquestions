// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/// for problems like this we can use hashmap or set
//  to store the jewels and then check the stones if they are in the hashmap or set

// time complexity: O(n)
// space complexity: O(1) as only english letters are used and it can be only 52

// using hashmap

var numJewelsInStones = function (jewels, stones) {
  let setVal = new Set(jewels);
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (setVal.has(stones[i])) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));

// whenever u have to search for a character in a string or array, use set or hashmap
// wheever u have to count the number of occurences of a character in a string or array, use hashmap
