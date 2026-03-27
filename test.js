const strStr = function (haystack, needle) {
  let haystackIndex = 0;

  while (haystackIndex < haystack.length) {
    let str = haystack.slice(haystackIndex, haystackIndex + needle.length);
    if (str === needle) {
      return haystackIndex;
    } else {
      haystackIndex++;
    }
  }
  return -1;


  
};

console.log(strStr("mississippi", "issip"));

console.log(strStr("leetcode", "leet"));
