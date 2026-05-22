function groupBy(arr, key) {
  return arr.reduce((acc, curr) => {
    if (acc[curr[key]]) {
      acc[curr[key]].push(curr);
    } else {
      acc[curr[key]] = [curr];
    }

    return acc;
  }, {});
}
console.log(
  groupBy(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age",
  ),
);
module.exports = groupBy;
