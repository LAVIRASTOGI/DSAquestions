/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack1 = [];
  let validOperators = ["+", "-", "*", "/"];
  for (let i = 0; i < tokens.length; i++) {
    if (validOperators.includes(tokens[i])) {
      let val2 = stack1.pop();
      let val1 = stack1.pop();
      let operationVal;
      if (tokens[i] === "+") {
        operationVal = val1 + val2;
      }
      if (tokens[i] === "-") {
        operationVal = val1 - val2;
      }
      if (tokens[i] === "/") {
        operationVal = parseInt(val1 / val2);
      }
      if (tokens[i] === "*") {
        operationVal = val1 * val2;
      }
      stack1.push(Number(operationVal));
    } else {
      stack1.push(Number(tokens[i]));
    }
  }
  return stack1.pop();
};
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
