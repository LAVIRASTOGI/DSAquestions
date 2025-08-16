//explaination
//we are using two pointers to merge the two arrays
//we are using a for loop to iterate through the array
//we are using an if statement to check if the current element is in the first array
//if it is, we are adding it to the first array
//if it is not, we are adding it to the second array
//finally, we are returning the merged array

// time complexity - O(n+m) = O(n)
// space complexity - O(n)
function mergeSortedArray(nums1, m, nums2, n) {
  let numsCopy = nums1.slice(0, m);

  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < n + m; i++) {
    if ((p1 < m && numsCopy[p1] < nums2[p2]) || p2 >= n) {
      nums1[i] = numsCopy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
