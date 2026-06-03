function flattenObject(obj = {}, parentKey = "") {
  let result = {};
  //write your implementation here
  function flatObj(nestedObj, parentKeyVal) {
    for (let keyVal in nestedObj) {
      let newKey = parentKeyVal ? `${parentKeyVal}.${keyVal}` : keyVal;

      if (typeof nestedObj[keyVal] === "object" && nestedObj[keyVal] !== null) {
        if (Object.keys(nestedObj[keyVal]).length > 0) {
          flatObj(nestedObj[keyVal], newKey);
        }
      } else {
        console.log(nestedObj[keyVal]);
        result[newKey] = nestedObj[keyVal];
      }
    }
  }
  flatObj(obj, parentKey);
  return result;
}
let user = {
  name: "John",
  empty: {},
  address: {
    country: null,
    state: "India",
    education: {
      school: "APS",
      year: 2021,
    },
  },
};
flattenObject(user);
