function findMissingNumbers(nums) {
  const numbers = new Set(nums);
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!numbers.has(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(findMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
