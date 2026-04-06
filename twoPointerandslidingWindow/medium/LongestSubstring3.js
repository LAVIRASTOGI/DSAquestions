/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let wordsArr = [];
  let wordsMap = new Map();
  let word = "";
  let char = "";
  let pos = 0;
  while (pos < s.length) {
    if (wordsMap.has(s[pos])) {
      char = s[pos];
      wordsArr.push(word);
      wordsMap.clear();
      word = "";
      --pos;
    }
    if (char) {
      if (char !== s[pos]) {
        pos--;
      } else {
        char = "";
        pos++;
      }
    } else {
      word = word + s[pos];
      wordsMap.set(s[pos], 1);
      ++pos;
    }
  }

  if (word.length) {
    wordsArr.push(word);
  }
  let maxArr = wordsArr[0];
  for (let i = 0; i < wordsArr.length; i++) {
    if (maxArr.length < wordsArr[i].length) {
      maxArr = wordsArr[i];
    }
  }

  return maxArr?.length ? maxArr.length : 0;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
