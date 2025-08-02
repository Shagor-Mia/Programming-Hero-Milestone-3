// push-pop
const number = [12, 13, 14, 15, 16];

// number.push(11, 99, 55);
number.pop();
// number.shift();
// number.unshift(23);
console.log(number);

// check array

const friends = ["halim", "dalim", "mahin", "tuhin"];
console.log(friends.includes("dali"));

if (friends.includes("ali")) {
  console.log("go for party");
} else {
  console.log("name not in the array");
}

console.log(friends.indexOf("mahin"));

const age = 34;
const e = [];
const bool = true;
console.log(Array.isArray(age));
console.log(Array.isArray(e));
console.log(Array.isArray(bool));
console.log(Array.isArray(friends));

// join

// concate

// slice

// splice
