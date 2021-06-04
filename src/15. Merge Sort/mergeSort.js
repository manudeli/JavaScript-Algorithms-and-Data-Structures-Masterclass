console.log(
  mergeSort([
    10, 24, 76, 73, 72, 1, 9, 123, 4, 123, 124, 1233, 23, 34, 5636, 757, 5, 4,
    54, 6534, 6375, 473, 42, 443543, 5435, 3546453, 65, 345, 5, 454, 54, 7, 65,
  ])
);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // Push rest of array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  console.log("merge:", results);
  return results;
}
