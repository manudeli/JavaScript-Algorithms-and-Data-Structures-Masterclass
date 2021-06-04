function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(
  getDigit(12345, 0), // 5
  getDigit(12345, 1), // 4
  getDigit(12345, 2), // 3
  getDigit(12345, 3), // 2
  getDigit(12345, 4) // 1
);

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(123), Math.abs(123));

function maxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(maxDigits([23, 567, 12234324, 90]));
