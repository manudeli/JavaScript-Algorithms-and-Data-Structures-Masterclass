// Pivot Helper
/*
1. In order to implement merge sort, it's useful to first implement a function
    responsible arranging elements in an array on either side of a pivot.
2. Given an array, this helper function should designate an element as the pivot.
3. It should then rearrange elements in the array so that all values less than
    the pivot are moved to the left of the pivot, and all values greater than the
    pivot are moved to the right of the pivot.
4. The order of elements on either side of the pivot doesn't matter!
5. The helper should do this in place, that is, it should not create a new array.
6. When complete, the helper should return the index of the pivot.
*/

// Picking a pivot
/*
1. The runtime of quick sort depends in part on how one selects the pivot.
2. Ideally, the pivot should be chosen so that it's roughly the median value
    in the data set you're sorting.
3. For simplicity, we'll always choose the pivot to be the first element (we'll
    talk about consequences of this later)
*/

// Pivot PseudoCode
/*
1. It will help to accept three arguments: an array, a start index, and an end
    index (these can default to 0 and the array length minus 1, respectively)
2. Grab the pivot from the start of the array 
3. Store the current pivot index in a variable (this will keep track of where
    the pivot should end up)
4. Loop through the array from the start until the end
5. If the pivot is greater than the current element, increment the pivot index
    variable and then swap the current element with the element at the pivot index
6. Swap the starting element (i.e. the pivot) with the pivot index
7. Return the pivot index
*/

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// Result expected: 3
// [ 2, 1, 3, 4, 8, 6, 7, 5 ]
