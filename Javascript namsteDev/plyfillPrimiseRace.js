// function promiseRace(promises) {
//   return new Promise((resolve, reject) => {
//     for (let item of promises) {
//       Promise.resolve(item).then(resolve, reject);
//     }
//   });
// }

// promiseRace([10, Promise.resolve(1), Promise.resolve(4)]).then((res) =>
//   console.log(res),
// );

// suppose any promise is there
// Promise.resolve(item) Promise.resolve(Promise.resolve(1)) - it will not create a new promise it will use same promise
// p1 = Promise.resolve(1);
// p2 = Promise.resolve(p1);  p1===p2 // true

// but for 42 - Promise.resolve(42) // craete a new promise

/// polyfill for race

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (let item of promises) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
};

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 eror"), 1000);
});

Promise.myRace([p1, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// whatever is resolved first error or success that is executed

// Promise.any()
// Returns the first successful/fulfilled promise.

Promise.myany = function (promises) {
  return new Promise((resolve, reject) => {
    let rejectError = 0;
    for (let items of promises) {
      Promise.resolve(items)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          rejectError++;
          if (rejectError === promises.length) {
            reject("All promises are falied");
          }
        });
    }
  });
};

const p11 = new Promise((resolve) => {
  setTimeout(() => resolve("p11 success"), 3000);
});

const p22 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p22 eror"), 1000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("p3 success"), 5000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p4 eror"), 1000);
});

// Promise.any()
// Returns the first successful/fulfilled promise.

Promise.myany([p22, p4, p3, p11])
  .then((res) => console.log("any", res))
  .catch((err) => console.log(err));

// Promise.race()
// Returns the first successful/error promise.

Promise.myRace([p22, p4, p3, p11])
  .then((result) => {
    console.log("race");
    console.log(result);
  })
  .catch((error) => {
    console.log("race");
    console.log(error);
  });

// promise all -- if success  then return all result after all promises fullfilled

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let successCount = 0;

    for (let item of promises) {
      Promise.resolve(item)
        .then((value) => {
          result.push(value);
          successCount++;
          if (successCount === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(["error occured"]);
        });
    }
  });
};

Promise.all([p3, p11, p4])
  .then((res) => {
    console.log("promise all", res);
  })
  .catch((err) => console.log(err));

//   allSettled  → wait for all result reports

Promise.allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let successCount = 0;

    for (let item of promises) {
      Promise.resolve(item)
        .then((value) => {
          result.push(value);
          successCount++;
          if (successCount === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          result.push("error occured");
          successCount++;
          if (successCount === promises.length) {
            resolve(result);
          }
        });
    }
  });
};

Promise.allSettled([p3, p11, p4])
  .then((res) => {
    console.log("promise all", res);
  })
  .catch((err) => console.log(err));
