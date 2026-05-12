// Input: "3[a2[c]]"
// Output: "accaccacc"
function decodeString(s) {
  const countStack = [];
  const stringStack = [];

  let currentString = "";
  let currentNumber = 0;

  for (const char of s) {
    if (!isNaN(char)) {
      currentNumber = currentNumber * 10 + Number(char);
    } else if (char === "[") {
      countStack.push(currentNumber);
      stringStack.push(currentString);

      currentNumber = 0;
      currentString = "";
    } else if (char === "]") {
      const repeatCount = countStack.pop();
      const previousString = stringStack.pop();

      currentString = previousString + currentString.repeat(repeatCount);
    } else {
      currentString += char;
    }
  }

  return currentString;
}
