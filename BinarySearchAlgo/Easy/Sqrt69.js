var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
 
  let left = 2;
  let right = Math.floor(x / 2);
  if(right==1){
    return right
  }

  while (left + 1 !== right  && left <right) {
    let middle = Math.floor((left + right) / 2);

    let squareRootVal = middle * middle;
    if (squareRootVal === x) {
      return middle;
    }

    if (squareRootVal > x) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return left;
};

mySqrt(50);
