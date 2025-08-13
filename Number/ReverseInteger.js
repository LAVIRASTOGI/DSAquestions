// reverse an integer only 32 bit integer . if goes out of range return 0
// example: 123 -> 321

function reverseNumber(n) {
  let original = n;
  // if the number is negative, make it positive
  if (n < 0) {
    n = n * -1;
    // or we can use Math.abs(n)
    // n = Math.abs(n);
  }

  let reversed = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  let limit = Math.pow(2, 31);
  // if the number is out of range, return 0
  if (reversed > limit - 1 || reversed < -limit) {
    return 0;
  }

  if (original < 0) {
    reversed = reversed * -1;
  }
  return reversed;
}

console.log(reverseNumber(123));
