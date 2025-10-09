/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
    let obj1 = {};
 for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = obj1[s[i]] ? obj1[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (obj1[t[i]]) {
      obj1[t[i]] = --obj1[t[i]];
      if (obj1[t[i]] == 0) {
        delete obj1[t[i]];
      }
    }
  }
  if (Object.keys(obj1).length !== 0) {
    return false;
  }
  return true;
};

console.log(isAnagram("cat", "tac"));
