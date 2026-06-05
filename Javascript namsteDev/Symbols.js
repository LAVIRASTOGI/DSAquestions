// Symbols is a peimitive datatype used to create a unquie values mainly used for object keys

let sy1 = Symbol();
let sy2 = Symbol();
let sy3 = Symbol("id");

// sy1==sy2 // false all symbol are unquie

console.log(sy1); //Symbol()
console.log(sy1 === sy2); //false
console.log(sy3); //Symbol(id)

// But Symbol.for() checks global symbol registry.

const s1 = Symbol.for("id");
const s2 = Symbol.for("id");

console.log(s1 === s2); // true

// Symbol("id")  --- 	Always creates new symbol
// Symbol.for("id") ---- Reuses existing symbol if present

// unique identify some property
const user = {
  name: "Ekansh",
  age: 28,

  [Symbol.toPrimitive](data) {
    if (data == "number") {
      return this.age;
    } else {
      return this.name;
    }
  },
  toString(val) {
    return JSON.stringify(Object.keys(user).join("|"));
  },

  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;
    return {
      next() {
        if (current <= end) {
          return {
            value: current++,
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

const id = Symbol("id");

user[id] = 101;

console.log(user);

// symbols are not shown in normal loops
console.log(user.hasOwnProperty(id)); // true
console.log(user.hasOwnProperty("name")); // true

console.log(Object.keys(user)); //[ 'name', 'age' ]

//To get symbol keys:
console.log(Object.getOwnPropertySymbols(user));

// Symbol.keyFor()

// Used to get key of global symbol.

const s11 = Symbol.for("userId");

console.log(Symbol.keyFor(s11));

// Important built-in Symbols

// JavaScript has some built-in symbols like:

// Symbol.iterator
// Symbol.toStringTag
// Symbol.toPrimitive

console.log(String(user));
console.log(Number(user));

console.log("tostring", user.toString());
