// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// explain - use 2 pointer

// step 1 - use 2 pointer x and i

// step 2 - if nums[i] !== val,
            // then nums[x] = nums[i] and ++x
// step 3 - return x

function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      ++x;
    }
  }
  //   nums.fill("_", x);
  console.log(nums);
  return x;
}

console.log(removeElement([0, 4, 3, 2, 2, 3, 4, 5], 3));
