function reverseWords(sentence) {
  // Your implementation
  // Your implementation

  // preserve space
  let arr = sentence.split(/(\s+)/);
  let newStr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newStr[i] = arr[i].split("").reverse().join("");
    }
  }
  console.log(newStr);
  return newStr.join("");
}
