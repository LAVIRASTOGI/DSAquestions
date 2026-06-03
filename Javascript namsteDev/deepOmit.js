function deepOmit(obj, keysToOmit) {
  // Your implementation

  function removeKey(value) {
    if (Array.isArray(value)) {
      return value.map((ele) => removeKey(ele));
    }
    if (value !== null && typeof value === "object") {
      let result = {};
      for (let key in value) {
        if (!keysToOmit.includes(key)) {
          result[key] = removeKey(value[key]);
        }
      }
      return result;
    }

    return value;
  }

  return removeKey(obj);
}

//For the purpose of user debugging.
//pass your object and keys in function call

let obj = {
  a: 1,
  b: { c: 2, d: 3 },
};

const input = [
  { a: 1, b: 2 },
  { c: 4, d: 5 },
];

let x = deepOmit(input, ["c", "d"]);
console.log(x);
module.exports = deepOmit;
