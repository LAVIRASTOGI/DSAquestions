// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {
//     if(haystack.indexOf(needle)!==-1){
//         return haystack.indexOf(needle)
//     }else{
//         return -1
//     }
// };

/**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {
//     if(haystack.indexOf(needle)!==-1){
//         return haystack.indexOf(needle)
//     }else{
//         return -1
//     }
// };

/**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let haystackPointer = 0;

  while (haystackPointer < haystack.length) {
    let str = haystack.slice(haystackPointer, haystackPointer + needle.length);
    console.log(str);
    if (needle === str) {
      return haystackPointer;
    }
    haystackPointer++;
  }
  return -1;
};

console.log(strStr("mississippi", "issip"));
