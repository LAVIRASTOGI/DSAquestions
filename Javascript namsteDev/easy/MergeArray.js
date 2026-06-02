let arr1 = [
  { id: 1, name: "lavi" },
  { id: 2, name: "Bob" },
];
let arr2 = [
  { id: 2, age: 30 },
  { id: 3, name: "charlie" },
];

function mergeData(arr1, arr2) {
  let newObj = {};
  //Your implementation
  arr1.forEach((element) => {
    let id1 = element.id;
    newObj[id1] = element;
  });
  arr2.forEach((ele) => {
    let id1 = ele.id;
    if (newObj[id1]) {
      newObj[id1] = { ...newObj[id1], ...ele };
    } else {
      newObj[id1] = ele;
    }
  });

  return Object.values(newObj);
}

//For the purpose of user debugging.
//pass your arrays in function call
mergeData(arr1, arr2);

module.exports = mergeData;
