function removeDuplicates(arr) {
  return arr.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    [],
  );
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
module.exports = removeDuplicates;
