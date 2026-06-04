function reverse(str) {
  let newArr = str.split("");
  let left = 0;
  let right = newArr.length - 1;

  while (left <= right) {
    if (/^[aeiou]$/i.test(newArr[left])) {
      if (/^[aeiou]$/i.test(newArr[right])) {
        [newArr[right], newArr[left]] = [newArr[left], newArr[right]];
        ++left;
        --right;
        console.log("here check", newArr, left, right);
      } else {
        --right;
        console.log("right", newArr, left, right);
      }
    } else {
      ++left;
      console.log("left", newArr, left, right);
    }
  }
  return newArr.join("");
}

console.log(reverse("icon space"));
