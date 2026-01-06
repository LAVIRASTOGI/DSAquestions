/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // s- partial str t-fullStr
  let partialStr = 0;
  let fullStr = 0;
  while (partialStr < s.length && fullStr < t.length) {
    if (s[partialStr] === t[fullStr]) {
      partialStr++;
      fullStr++;
    } else {
      fullStr++;
    }
  }

  if (fullStr === t.length && partialStr !== s.length) {
    return false;
  } else {
    return true;
  }
};

console.log(isSubsequence("axc", "ahbgdc"));
