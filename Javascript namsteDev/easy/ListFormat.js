function formatList(items) {
  if (!Array.isArray(items)) {
    throw new TypeError();
  }
  if (items.length === 0) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }
  // your implementation
  let result = items[0];
  for (let i = 1; i < items.length - 1; i++) {
    result = `${result}, ${items[i]}`;
  }
  result = `${result} and ${items[items.length - 1]}`;
  return result;
}

//For the purpose of user debugging.
formatList(["apple", "banana"]);

module.exports = formatList;
