// break
// Write a loop 1 to 200. Use break to exit the loop once you find 100.
// for (let n = 1; n <= 200; n++) {
//   if (n === 100) {
//     break;
//   }
//   console.log(n);
// }

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

// let n = 1;
// let sum = 0;

// while (true) {
//   sum += n;
//   if (sum + n >= 100) {
//     break;
//   }
//   n++;
// }

// console.log("Sum:", sum);

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let n = 2; n <= 100; n++) {
  if (Number.isInteger(Math.sqrt(n))) {
    console.log("first square root:", n);
    break;
  }
}

// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

for (let n = 1; n <= 40; n++) {
  if (n % 2 === 1) {
    continue;
  }
  console.log(n);
}

// display odd number from 55 to 85 and skip the numbers divisible by 5.
for (let n = 55; n <= 85; n++) {
  if (n % 2 === 1 && n % 5 !== 0) {
    console.log(n);
  }
}
