// productOfArray
/*
Write a function called productOfArray which takes in an array of numbers and
returns the product of them all.
*/

function productOfArray(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * productOfArray(nums.slice(1));
}

console.log(
  productOfArray([]), //
  productOfArray([1, 2, 3]), // 6
  productOfArray([1, 2, 3, 10]) // 60
);
