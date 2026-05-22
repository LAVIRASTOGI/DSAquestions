function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  str2 = str2.toLowerCase().replace(/[^a-z]/g, "");
  console.log(str1, str2);
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");
  return newStr1 === newStr2;
}

//For the purpose of user debugging.
console.log(isAnagram("listen", "silent"));
module.exports = isAnagram;
