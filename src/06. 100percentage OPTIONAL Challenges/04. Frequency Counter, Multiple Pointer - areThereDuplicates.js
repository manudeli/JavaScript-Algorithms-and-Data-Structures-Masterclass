// 04. Frequency Counter, Multiple Pointer - areThereDuplicates
/* 
Implement a function called, areThereDuplicates which accepts a variable number of
arguments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

/* Way 1. Frequency Counter */
// function areThereDuplicates() {
//   const arrArguments = [...arguments];
//   const frequencyCounter = {};
//   let result = false;
//   arrArguments.map((argument) => {
//     frequencyCounter[argument] = (frequencyCounter[argument] || 0) + 1;
//     if (frequencyCounter[argument] >= 2) {
//       result = true;
//     }
//   });

//   return result;
// }

/* Way 2. Multiple Pointers */
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates("a", "b", "c", "a") // true
);
