// for...of loop
const arrays = [12, 13, 14, 15];

for (const [index, item] of arrays.entries()) {
  console.log(`${index}` + "th of the array" + item);
}
console.log("...............");

const arr = [12, 13, 14, 15];
for (let i = 0; i < arr.length; i++) {
  console.log(`index of ${i} is number:${arr[i]}`);
}
console.log("...................");

const arra = [12, 13, 14, 15];
arra.forEach((item, index) => {
  console.log(`${index}th number is${item}`);
});

// while loop

let a = 0;

while (a < 4) {
  console.log(`a is less then by:${a}`);
  a++;
}

// sum
let ab = 1;
let sum = 0;
for (ab; ab < 10; ab++) {
  // console.log(ab);
  sum = sum + ab;
  console.log(sum);
}

// even number
let c = 1;
for (c; c < 10; c++) {
  if (c % 2 === 0) {
    console.log("the even number is:", c);
  }
  console.log(c);
}

// odd number
let d = 1;
for (d; d < 10; d++) {
  if (d % 2 !== 0) {
    console.log("the odd number is:", d);
  }
  console.log(d);
}

// for loop
let su = 0;
for (let n = 20; n >= 1; n--) {
  console.log(n);
  su = su + n;
}
console.log("total:", su);
