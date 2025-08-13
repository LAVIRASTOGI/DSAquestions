// question: count the number of digits in a number

function countDigits(n) {
  let count = 0;
  // if the number is 0, return 1
  if (n === 0) {
    return 1;
  }
  // if the number is negative, make it positive
  if (n < 0) {
    n = n * -1;
  }
  // or we can use Math.abs(n)
  // n = Math.abs(n);

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(12345));
