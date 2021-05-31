// Frequency Counter - sameFrequency
/* 
Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits
 */

function sameFrequency(num1, num2) {
  const frequencyCounter1 = makeFrequencyCounterDigits(num1);
  const frequencyCounter2 = makeFrequencyCounterDigits(num2);

  let result = true;

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      result = false;
    }
  }

  return result;

  function makeFrequencyCounterDigits(num) {
    const FrequencyCounter = {};
    String(num)
      .split("")
      .forEach((strNum) => {
        FrequencyCounter[Number(strNum)] =
          (FrequencyCounter[Number(strNum)] || 0) + 1;
      });
    return FrequencyCounter;
  }
}

console.log(
  sameFrequency(182, 281),
  sameFrequency(34, 14),
  sameFrequency(3589578, 5879385),
  sameFrequency(22, 222)
);
