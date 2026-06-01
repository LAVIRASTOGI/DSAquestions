function flattenObject(obj) {
  if (Object.keys(obj).length === 0) return {};
  let result = {};
  // Your implementation
  function flattenObj(originalObj, path, keyVal) {
    for (let key in originalObj) {
      let newKey = keyVal ? `${keyVal}.${key}` : key;
      if (!originalObj[key]) {
        path[newKey] = originalObj[key];
      } else if (
        typeof originalObj[key] === "object" &&
        !Array.isArray(originalObj[key])
      ) {
        flattenObj(originalObj[key], path, newKey);
      } else {
        path[newKey] = originalObj[key];
      }
    }
  }
  flattenObj(obj, result, null);
  return result;
}

//For the purpose of user debugging.
flattenObject({ a: { b: 1, c: { k: "lavi" } }, d: null });

module.exports = flattenObject;
