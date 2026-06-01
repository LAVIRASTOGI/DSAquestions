// Use Fisher–Yates shuffle. It gives a proper random shuffle and does not mutate the original array if we first copy it.
function shuffle(arr) {
  const result = [...arr]; // copy, so original array is not changed

  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // swap result[i] and result[randomIndex]
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  return result;
}
