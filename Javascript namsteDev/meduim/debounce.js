function debounce(fn, delay) {
  // Your implementation
  let id = null;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//For the purpose of user debugging.
//pass appropriate input in below function call
const debounceLog = debounce((input) => console.log("hii", input), 1000);

debounceLog("hello");
debounceLog("hi");
debounceLog("jjj");

module.exports = debounce;
