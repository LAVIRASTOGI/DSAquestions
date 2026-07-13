function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let longest = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    if (nums[i] === nums[i - 1] + 1) {
      currentLength++;
    } else {
      currentLength = 1;
    }

    longest = Math.max(longest, currentLength);
  }

  return longest;
}

//  0(logn)
