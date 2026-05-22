function decodeSecretCode(s) {
  if (!s) return "";
  // odd string - "a1b"
  if (s.length % 2 !== 0) return "";
  let stack = [];
  let str = "";
  // your solution
  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      let char = stack.pop();
      let asciiVal = char.charCodeAt(0);
      let newVal = Number(asciiVal) + Number(s[i]);
      let charVal = String.fromCharCode(newVal);
      str = str + charVal;
    } else {
      stack.push(s[i]);
    }
  }
  return str;
}
decodeSecretCode("a2b5z2");
module.exports = { decodeSecretCode };
