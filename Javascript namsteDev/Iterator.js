// An iterator is an object that gives values one by one.

// An iterator object must implement a next() method.
// The next() method returns an object with two properties:
// value : The next value in the sequence.
// done : A boolean that is true if the iterator has finished its sequence,
// otherwise false .

const iterator = {
  current: 1,
  next() {
    if (this.current <= 5) {
      return {
        value: this.current++,
        done: false,
      };
    } else {
      return {
        value: undefined,
        done: true,
      };
    }
  },
};

let results = iterator.next();
while (!results.done) {
  console.log(results.value);
  results = iterator.next();
}

// Iterator

// Has a next() method.

const iterator = {
  next() {
    return { value: 1, done: false };
  },
};
// Iterable

// Has [Symbol.iterator]() method.

const iterable = {
  [Symbol.iterator]() {
    return iterator;
  },
};

// built in iterable--

// map,
// array,
// set,
// string

// for of works on all these

// Normal object
const obj = {
  a: 1,
  b: 2,
};

// It is:

// Not iterator because no next()
// Not iterable because no Symbol.iterator
// But enumerable, so for...in works

// for of doesnt work in obejct
