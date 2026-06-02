// const tasks = [
//   () => delayTask(100, "A"),
//   () => delayTask(50, "B"),
//   () => delayTask(10, "C"),
// ];

const tasks = [
  () => Promise.resolve("X"),
  () => Promise.resolve("Y"),
  () => Promise.resolve("Z"),
];
const maxConcurrent = 2;

function delayTask(ms, result) {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log("here", result);
      res(result);
    }, ms);
  });
}

async function scheduleTasks(tasks, maxConcurrent) {
  // implement here
  const results = new Array(tasks.length);
  let index = 0;

  async function worker() {
    console.log("jjj");
    while (index < tasks.length) {
      let currentIndex = index;
      index++;
      results[currentIndex] = await tasks[currentIndex]();
    }
  }

  let workers = [];
  for (let i = 0; i < Math.min(maxConcurrent, tasks.length); i++) {
    workers.push(worker());
  }

  await Promise.all(workers);

  console.log(results);
  return results;
}

scheduleTasks(tasks, maxConcurrent);
module.exports = scheduleTasks;
