function isSumOfConsecutive(n) {
  // your implementation here
  let length = Math.ceil(n / 2);
  let i = 1;
  let j = 1;
  let sum = 0;

  while (j < length) {
    sum = sum + j;
    if (sum === n) {
      if (j - i + 1 >= 2) {
        return true;
      }
      return false;
    }
    if (sum < n) {
      j++;
    }
    if (sum > n) {
      i++;
      j = i;
      sum = 0;
    }
  }
  return false;
}

console.log(isSumOfConsecutive(8));
console.log(isSumOfConsecutive(4));
console.log(isSumOfConsecutive(16));
console.log(isSumOfConsecutive(10));

module.exports = { isSumOfConsecutive };
