// Sliding Window - findLongestSubstring
/* 
Write a function called findLongestSubstring, which accepts a string
and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let tempFrequencyCounter = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (tempFrequencyCounter[char]) {
      start = Math.max(start, tempFrequencyCounter[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    maxLength = Math.max(maxLength, i - start + 1);
    // store the index of the next char so as to not double count
    tempFrequencyCounter[char] = i + 1;
  }

  return maxLength;
}

console.log(
  findLongestSubstring(""), // 0
  findLongestSubstring("rithmschool"), // 7
  findLongestSubstring("thisisawesome"), // 6
  findLongestSubstring("thecatinthehat"), // 7
  findLongestSubstring("bbbbbb"), // 1
  findLongestSubstring("longestsubstring"), // 8
  findLongestSubstring("thisishowwedoit") // 6
);
