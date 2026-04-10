var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    if (guess(middle) === 0) {
      return n;
    }
    if (guess(middle) === -1) {
      right = middle;
    }
    if (guess(middle) === 1) {
      left = middle;
    }
  }
};
