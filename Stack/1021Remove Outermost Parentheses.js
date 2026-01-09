/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let s1 = "";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        s1 = s1 + s[i];
      }
    } else {
      if (stack.length > 1) {
        s1 = s1 + ")";
      }
      stack.pop();
    }
  }
  return s1;
};

removeOuterParentheses("(()())(())");
