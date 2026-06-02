function customAssign(target, ...sources) {
  if (!target) {
    throw new TypeError();
  }
  let res = sources.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});
  return { ...target, ...res };
  // Your implementation
}

//For the purpose of user debugging.
//pass appropriate input in below function call
customAssign({ a: 1 }, { a: 2, b: 3 }, { c: 5 });

module.exports = customAssign;
