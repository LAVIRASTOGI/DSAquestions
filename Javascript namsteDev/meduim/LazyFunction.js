function lazy(fn) {
  const queue = [];
  const proxy = new Proxy(
    {},
    {
      get(target, prop) {
        if (prop === "execute") {
          return function () {
            let results = queue.map(({ func, args }) => func(...args));
            return results;
          };
        }
        if (!(prop in fn)) {
          throw new Error(`Function ${prop} not found`);
        }

        return function (...args) {
          queue.push({
            func: fn[prop],
            args,
          });
          console.log("came here", queue);
          return proxy;
        };
      },
    },
  );
  return proxy;
}

const add = (a, b) => a + b;
//For the purpose of user debugging.
//pass appropiate input in below fucntion call
let obj = lazy({ add }).add(2, 3).add(4, 5).execute();
console.log(obj);

const obj1 = {
  name: "lavi",
  age: 33,
};

// with new Proxy -------- we can access obj
const newObj = new Proxy(obj1, {
  get(target, prop) {
    if (prop === "age") {
      console.log("value of", prop, target[prop] * 7);
    } else {
      console.log("value of", prop, target[prop]);
    }
  },
});
newObj.name;
newObj.age;
module.exports = lazy;
