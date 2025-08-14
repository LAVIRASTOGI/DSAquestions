// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s) {
  for (let i = 0; i < s.length / 2; i++) {
    let val = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = val;
  }


  //or
  s.reverse();

  //or
  //   let r = 0;
  //   let l = s.length - 1;
  //   while (r < l) {
  //     let val = s[l];
  //     s[l] = s[r];
  //     s[r] = val;
  //     ++r;
  //     --l;
  //   }
  console.log(s);
}
reverseString(["h", "e", "l", "l", "o"]);
