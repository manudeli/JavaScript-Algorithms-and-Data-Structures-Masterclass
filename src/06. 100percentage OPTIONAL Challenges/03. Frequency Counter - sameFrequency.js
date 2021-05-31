function sameFrequency(num1, num2) {
  const arrDigits1 = makeArrDigits(num1);
  const arrDigits2 = makeArrDigits(num2);

  console.log(arrDigits1, arrDigits2);

  function makeArrDigits(num) {
    return String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
  }
}

sameFrequency(182, 281);
