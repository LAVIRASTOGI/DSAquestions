function findSingleElement(arr) {
  let l = 0;
  let r = arr.length - 1;
  if (arr.length == 1) {
    return arr[0];
  }

  while (l <= r) {
    if (arr[l] == arr[l + 1]) {
      if (arr[r] != arr[r - 1]) {
        return arr[r];
      }
      l = l + 2;
      r = r - 2;
    } else {
      return arr[l];
    }
  }
}

console.log(findSingleElement([1, 2, 2, 3, 3]));
