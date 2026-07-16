// 1. Sleep function
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// 2. Pipe function: left to right
function pipe(...functions) {
  return function (initialValue) {
    return functions.reduce((result, currentFunction) => {
      return currentFunction(result);
    }, initialValue);
  };
}

// 3. Compose function: right to left
function compose(...functions) {
  return function (initialValue) {
    return functions.reduceRight((result, currentFunction) => {
      return currentFunction(result);
    }, initialValue);
  };
}

// Functions used by pipe and compose
const addTwo = (number) => number + 2;
const multiplyByThree = (number) => number * 3;
const subtractOne = (number) => number - 1;

async function run() {
  console.log("Program started");

  await sleep(2000);

  console.log("After 2 seconds");

  const pipeCalculation = pipe(addTwo, multiplyByThree, subtractOne);

  const pipeResult = pipeCalculation(5);

  console.log("Pipe result:", pipeResult);
  // 5 → addTwo → 7
  // 7 → multiplyByThree → 21
  // 21 → subtractOne → 20

  const composeCalculation = compose(subtractOne, multiplyByThree, addTwo);

  const composeResult = composeCalculation(5);

  console.log("Compose result:", composeResult);
  // Compose executes from right to left:
  // 5 → addTwo → 7
  // 7 → multiplyByThree → 21
  // 21 → subtractOne → 20
}

run();
