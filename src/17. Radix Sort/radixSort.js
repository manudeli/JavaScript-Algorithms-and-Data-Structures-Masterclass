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

function radixSort(nums) {
  const maxDigitCount = maxDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++)
      digitBuckets[getDigit(nums[j], k)].push(nums[j]);

    nums = [].concat(...digitBuckets);

    console.log(digitBuckets);
    console.log("digit:", 10 ** k, digitBuckets, "nums:", nums);
  }

  // return list at the end!
  return nums;
}

console.log(
  "arrRadixSorted:",
  radixSort([
    1, 3, 44, 327, 8, 123, 23, 2, 55, 43, 67254775, 53, 23453634, 5, 5343, 890,
  ])
);
