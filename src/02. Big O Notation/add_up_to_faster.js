function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = new Date();
const result = addUpTo(1000000000);
let t2 = new Date();
console.log(`Result:${result} Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
