const delayFn = (x) => {
  return new Promise((resolve, reject) => {
    console.log("run promise");
    setTimeout(() => {
      console.log("here promise API", x);
      resolve(x * 2);
    }, 2000);
  });
};
async function mapAsyncLimit(arr, limit, asyncFn) {
  // Your implementation
  const results = new Array(arr.length);
  let index = 0;

  async function worker() {
    while (index < arr.length) {
      let currentIndex = index;
      index++;
      try {
        results[currentIndex] = await asyncFn(arr[currentIndex]);
      } catch (err) {
        console.log("error", err);
        results[currentIndex] = "error";
      }
    }
  }

  let workers = [];
  for (let i = 0; i < Math.min(limit, arr.length); i++) {
    workers.push(worker());
  }

  await Promise.all(workers);
  return results;
}

//
//For the purpose of user debugging.
//pass appropiate input in below function call
mapAsyncLimit([2, 3, 5, 6, 7], 2, delayFn);
// console.log("start");
// delayFn(3).then((result) => console.log("ans", result));
// console.log("end");

module.exports = mapAsyncLimit;
