var twoSum = function (arr, target) {
  const n = arr.length;
  const map = {}; // value -> index

  // 1st pass: build hashmap value -> index
  for (let i = 0; i < n; i++) {
    map[arr[i]] = i;
  }

  // 2nd pass: find the pair
  for (let i = 0; i < n; i++) {
    const pairToFind = target - arr[i];

    // IMPORTANT: check explicitly for undefined (index 0 is falsy)
    if (map[pairToFind] !== undefined && map[pairToFind] !== i) {
      return [i, map[pairToFind]];
    }
  }

  // (LeetCode guarantees one solution, but just in case)
  return [];
};
