function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Define a function that accepts list of numbers
function radixSort(nums) {
  // Figure out how many digits the largest number has
  const maxDig = maxDigits(nums);
  // Loop from k = 0 up to this largest number of digits
  let nums2 = [];
  // For each iteration of the loop:
  for (let k = 0; k < maxDig; k++) {
    // Create buckets for each digit (0 to 9)
    const numsContainer = [[], [], [], [], [], [], [], [], [], []];
    nums2 = [];

    for (let j = 0; j < nums.length; j++) {
      // place each number in the corresponding bucket based on its kth digit
      numsContainer[getDigit(nums[j], k)].push(nums[j]);
    }
    console.log(numsContainer);
    for (let a = 0; a < numsContainer.length; a++) {
      // Replace our existing array with values in our buckets, starting with 0 and going up to 9
      nums2 = nums2.concat(numsContainer[a]);
    }
    console.log("digit:", 10 ** k, numsContainer, "nums2:", nums2);
    nums = nums2;
  }

  // return list at the end!
  return nums;
}

console.log(
  radixSort([
    1, 3, 44, 327, 8, 123, 23, 2, 55, 43, 67254775, 53, 23453634, 5, 5343, 890,
  ])
);
