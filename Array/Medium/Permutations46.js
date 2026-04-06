// useRecusrion to find permutations in string/array
// distinct numbers
var permute = function (nums) {
  const result = [];
  function backtrackingHandler(path, remaining) {
    // base condition
    if (remaining?.length === 0) {
      result.push(path);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      let pathVal = [...path, remaining[i]];
      let remainingval = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
      backtrackingHandler(pathVal, remainingval);
    }
  }

  backtrackingHandler([], nums);
  console.log(result);
  return result;
};

permute([1, 1, 2]);
