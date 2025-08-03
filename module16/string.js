const str = "dhaka";

console.log(typeof str);

console.log(str[3]);
// this  will not work.coz string is immutable
str[2] = "g";
console.log(str);

// Slice(),split(),join(),concate(),includes()

const names = "hello buddy";
const Slice = names.slice(2, 5);
console.log(Slice);
//
const splits = "hello everyone my name is md shagor Mia";
console.log(splits.split(" "));
const splits2 = "hello,everyone,my,name,is,md,shagor,Mia";
console.log(splits2.split(","));
//
const sentence = [
  "hello",
  "everyone",
  "my",
  "name",
  "is",
  "md",
  "shagor",
  "Mia",
];
console.log(sentence.join());
console.log(sentence.join("|"));
console.log(sentence.join("-"));
//
const concated = splits + " " + splits2;
console.log(concated);
console.log(splits.concat(" ").concat(splits2));
//
first = "ali";
last = "hasan";
console.log(first.includes("j"));

// reverse a string
const reversed = "hello peaple";
let reverse = "";
for (const item of reversed) {
  // console.log(item);
  reverse = item + reverse;
}
console.log(reverse);
//
const senten = "i am learning javascript";
let rev = "";
for (let i = 0; i < senten.length; i++) {
  const letter = senten[i];
  rev = letter + rev;
}
console.log(rev);
// short reverse
const revers = senten.split("").reverse().join("");
console.log(revers);

// objects

const student = {
  role: 123,
  name: "sagor",
  class: "11th",
  exam: {
    date: "12.12.12",
    subject: "bangla",
  },
};

student.role = 111;
student["name"] = "Mia";
const className = "class";
student[className] = "12th";

console.log(student.role);
console.log(student.exam?.date);
console.log(student["class"]);
console.log(student);

// Key value, nested object and delete
delete student.class;
console.log(student);
const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student.exam);
console.log(values);

//  Loop in an Object
// for...of: array
// for...in: object

const mobile = {
  title: "s4",
  brand: "samsung",
  price: 1234,
  origin: "korea",
};

for (const property in mobile) {
  console.log(property);
  console.log(mobile[property]);
}
