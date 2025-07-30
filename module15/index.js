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
