/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let setArr = new Set();
  let obj1 = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj1[s[i]]) {
      obj1[s[i]] = t[i];
      if (setArr.has(t[i])) {
        return false;
      }
      setArr.add(t[i]);
    } else {
      if (obj1[s[i]] !== t[i]) {
        return false;
      }
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
