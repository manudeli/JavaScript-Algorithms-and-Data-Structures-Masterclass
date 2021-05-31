// 04. Frequency Counter, Multiple Pointer - areThereDuplicates
/* 
Implement a function called, areThereDuplicates which accepts a variable number of
arguments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates() {
  const arrArguments = [...arguments];
  const frequencyCounter = {};
  let result = false;
  arrArguments.map((argument) => {
    frequencyCounter[argument] = (frequencyCounter[argument] || 0) + 1;
    if (frequencyCounter[argument] >= 2) {
      result = true;
    }
  });

  return result;
}

console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates("a", "b", "c", "a") // true
);
