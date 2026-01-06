let arr = [5, 3, 2, 0, 1];
function sumarr(indexVal) {
  if (indexVal === 0) {
    return arr[0];
  }
  if (arr[indexVal] % 2 !== 0) {
    return arr[indexVal] + sumarr(indexVal - 1);
  } else {
    return sumarr(indexVal - 1);
  }
}

console.log(sumarr(arr.length - 1));
