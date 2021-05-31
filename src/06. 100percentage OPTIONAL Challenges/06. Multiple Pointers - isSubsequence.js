// Multiple Pointers - isSubsequence
/*
Write a function called isSubsequence which takes in two strings and checks whether the
characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear
somewhere in the second string, without their order changing
*/

function isSubsequence(string1, string2) {
  const subChars = string1.split("");
  const inheritedChars = string2.split("");

  let sub = 0;
  let inherited = 0;
  while (inherited < inheritedChars.length) {
    if (sub === subChars.length) {
      return true;
    } else if (subChars[sub] === inheritedChars[inherited]) {
      sub++;
    } else if (subChars[sub] !== inheritedChars[inherited]) {
      inherited++;
    }
  }
  return false;
}

console.log(
  isSubsequence("hello", "hello"), // true
  isSubsequence("sing", "sting"), // true
  isSubsequence("abc", "abracadabra"), // true
  isSubsequence("abc", "acb") // false (order matters)
);
