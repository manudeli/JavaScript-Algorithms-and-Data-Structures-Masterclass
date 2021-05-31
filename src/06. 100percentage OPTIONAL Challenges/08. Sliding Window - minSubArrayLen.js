// Sliding Window - minSubArrayLen
/* 
Write a function called minSubArrayLen which accepts two parameters - an array of
positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is
greater than or equal to the integer passed to the function. if there isn't one, return 0 instead.
*/

function minSubArrayLen(arr, num) {
  let sumAll = 0;
  arr.map((num) => (sumAll += num));
  if (sumAll <= num) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return 1;
  }

  let minLength = arr.length - 1;
  let start = 0;

  while (minLength >= 1) {
    let tempSum = 0;

    for (let i = 0; i < minLength; i++) {
      tempSum += arr[start + i];
    }

    console.log("tempSum:", tempSum, "start:", start, "minLength:", minLength);

    if (tempSum >= num) {
      console.log(minLength);
      minLength--;
      start = 0;
    } else if (start + minLength === arr.length) {
      return minLength + 1;
    } else {
      start++;
    }
  }
}

console.log(
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4, 3] is the smallest subarray
  minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5, 4] is the smallest subarray
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
);
