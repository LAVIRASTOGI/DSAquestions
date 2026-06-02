// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var characterReplacement = function (s, k) {
  let mapData = new Map();
  let i = (j = 0);
  mapData.set(s[0], 1);
  console.log(mapData);
  let maxWindow = 0;
  while (j < s.length) {
    if (validHandler(mapData, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      ++j;
      if (j < s.length) {
        let val = mapData.get(s[j]) || 0;
        mapData.set(s[j], Number(val + 1));
        console.log("here", mapData, s[j], j);
      }
    } else {
      let val = Number(mapData.get(s[i]));
      mapData.set(s[i], Number(val) - 1);
      ++i;
      console.log("false", mapData);
    }
  }
  console.log(maxWindow);
  return maxWindow;
};

function validHandler(mapData, k) {
  let lengthVal = 0;
  let maxCount = 0;
  for (let [key, val] of mapData) {
    lengthVal = val + lengthVal;
    maxCount = Math.max(maxCount, val);
  }
  let validVal = lengthVal - maxCount;
  return validVal <= k;
}

characterReplacement("AABAABB", 2);
