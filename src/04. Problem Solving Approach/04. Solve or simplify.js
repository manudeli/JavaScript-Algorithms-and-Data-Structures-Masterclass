// Solve the problem, If you can't, Solve a simpler problem!

// SIMPLIFY
// - Find the core difficulty in what trying to do
// - Temporarily ignore that difficulty
// - Write a simplified solution
// - Then incorporate that difficulty back in

function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (result[char] > 0) {
      // if the char is a number/letter AND is a key in object, add one to count
      result[char]++;
    } else {
      // if the char is a number/letter AND not in object, add it and set value to 1
      result[char] = 1;
    }
  }
  //    if character is something else (space, period, etc. ) don't do anything
  // return object at end
  return result;
}

console.log(charCount("Hi there!"));
