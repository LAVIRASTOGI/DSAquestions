let user = {
  name: "lavi",
  age: 32,
};

const handler = {
  get(target, prop) {
    console.log(`Someone accessed property "${prop}"`);
    return target[prop];
    // console.log(target[prop]);
  },
};

const proxy = new Proxy(user, handler);
console.log(proxy.name);
