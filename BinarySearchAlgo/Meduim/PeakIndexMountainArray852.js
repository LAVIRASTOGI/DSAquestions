var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let arrMiddleless = arr[middle - 1] ?? 0;
    let arrMiddlemore = arr[middle + 1] ?? 0;

    if (arrMiddleless < arr[middle]) {
      if (arr[middle] > arrMiddlemore) {
        return middle;
      } else {
        left = middle + 1;
      }
    } else {
      right = middle - 1;
    }
  }
};

console.log(peakIndexInMountainArray([1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
