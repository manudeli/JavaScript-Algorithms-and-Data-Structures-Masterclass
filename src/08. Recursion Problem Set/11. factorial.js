function factorial(numb) {
  if (numb < 0) return 0;
  if (numb <= 1) return 1;
  return numb * factorial(numb - 1);
}

console.log(
  factorial(0), // 1
  factorial(1), // 1
  factorial(2), // 2
  factorial(4), // 24
  factorial(7) // 5040
);

// Awesome Why 0! = 1 :  https://www.youtube.com/watch?v=X32dce7_D48
