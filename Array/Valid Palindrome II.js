// Given a string s, return true if it can become a palindrome after deleting at most one character.

// Example 1
// Input: s = "aba"
// Output: true

// Input: s = "abca"
// Output: true

function isPallindrome(left, right, stringPalindrome) {
  let l = left;
  let r = right;
  while (l < r) {
    if (stringPalindrome[l] !== stringPalindrome[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPallindrome(left + 1, right, s) || isPallindrome(left, right - 1, s)
      );
    }
    left++;
    right--;
  }
}

console.log(validPalindrome("abcsa"));
