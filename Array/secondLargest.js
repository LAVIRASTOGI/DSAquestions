// question 2
// find the second largest number in the array

//  let arr = [-5, -9, -10, -11, -12, -13, -14, -1];
let arr = [1, 8, 4, 9, 56, 34];

// if explain then o/p se is good
// EXPLAIN APPROACH
// 1. we have to find the first largest and
// second largest number in the array
// 2. we have to iterate through the array and
// compare the elements with the first largest and second largest
// 3. if the element is greater than the first largest,
//  then we have to update the second largest to the first largest
// and the first largest to the element
// 4. if the element is greater than the second largest,
//  then we have to update the second largest to the element
// 5. finally, we have to return the first largest and second largest number

function secondLargest(arr) {
  // if the array is empty or has only one
  //  element or has two elements and both are same, then return null

  if (
    arr.length < 2 ||
    arr.length === 0 ||
    arr.length === 1 ||
    (arr.length === 2 && arr[0] === arr[1])
  ) {
    return null;
  }
  let firstLargest = -Infinity; // first largest
  let secondLargest = -Infinity; // second largest

  arr.forEach((ele) => {
    if (ele > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = ele;
      // if the element is equal to the first largest,then it will not update the second largest
    } else if (ele > secondLargest && ele !== firstLargest) {
      secondLargest = ele;
    }
  });

  return { secondLargest, firstLargest };
}
let result = secondLargest(arr);
console.log(result);
