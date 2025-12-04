/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groupAnaObj = {};
  strs.forEach((ele) => {
    let sortedele = ele.split("").sort().join("");
    groupAnaObj[sortedele] = groupAnaObj[sortedele]
      ? [...groupAnaObj[sortedele], ele]
      : [ele];
  });

  return Object.values(groupAnaObj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
