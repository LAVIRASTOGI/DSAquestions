/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack1 = [];
  let parenthesisObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (parenthesisObj[s[i]]) {
      stack1.push(s[i]);
    } else {
      let bracket = stack1.pop();
      if (parenthesisObj[bracket] !== s[i]) {
        return false;
      }
    }
  }
  return stack1.length === 0;
};

isValid("()[]{}");
