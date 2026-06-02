// function deepClone(obj) {
//   // Your implementation
//   let result = {};

//   function clone(newObj, result) {
//     for (let key in newObj) {
//       if (typeof newObj[key] == "object" && !Array.isArray(newObj[key])) {
//         result[key] = {};
//         clone(newObj[key], result[key]);
//       } else {
//         result[key] = newObj[key];
//       }
//     }
//   }
//   clone(obj, result);
//   return result;
// }

function deepClone(obj) {
  // primitive values
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // array
  if (Array.isArray(obj)) {
    const result = [];

    for (let i = 0; i < obj.length; i++) {
      result[i] = deepClone(obj[i]);
    }

    return result;
  }

  // object
  const result = {};

  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}

module.exports = deepClone;
//For the purpose of user debugging.
deepClone({ a: { b: { c: 3 } }, d: [3, 4] });

module.exports = deepClone;
