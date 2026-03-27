function findSmallest(arr) {
  let min;
  // your solution here
  if (!Array.isArray(arr)) {
    return "Invalid Inputs";
  }
  if (arr.length == 0) {
    return null;
  }
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
  return min;
}

findSmallest([1]);
