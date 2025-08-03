// objects
// 1.Access the golden rod color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

console.log(colors["golden rod"]);

// 2.For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);

// 3.Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

console.log(student.physics?.marks);

// 4.Count the number of properties.
let students = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
console.log(Object.keys(students).length);

// 5.Loop through an object and print the key-value pairs with their types
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const item in myObject) {
  const value = myObject[item];
  console.log(`key :${value}|type :${typeof value}`);
}

// string
// 1.Count how many times a string has the letter a

const string = "qAwieuajlhAgdsfpewaahvbaavAbwureirftwf";

const target = "a";
const count = string.split(target).length - 1;
console.log(`${target} is found in ${count} times`);
//or
const matches = string.match(new RegExp(target, "g"));
const counts = matches ? matches.length : 0;
console.log(`a found in match in ${counts} times`);

// 2.Count how many times a string has the letter a or A

const count2 = string.toLowerCase().split(target.toLowerCase()).length - 1;
console.log(`${target} is found in ${count2} times`);
//or
const match = string.match(new RegExp(target, "gi"));
const counts2 = match ? match.length : 0;
console.log(`a or A found in match in ${counts2} times`);

// 3.Check whether a string contains all the vowels a, e, i, o, u
const str2 = "hello everyone. are you fine";
const vowels = ["a", "e", "i", "o", "u"];
const lowerStr = str2.toLowerCase();
const hasVowel = vowels.every((vowel) => lowerStr.includes(vowel));
if (hasVowel) {
  console.log("all voewls found");
} else {
  console.log("vowels not found");
}

// 4.If a given string has either x, replace x by y. if the given string has X, replace it by Y.
const str3 = " this is Yenx Xiny";

const changeStr = str3.replace(/x/g, "y").replace(/X/g, "Y");
console.log(changeStr);

// 5.Capitalize Every first Letter of each word in a String

const str4 = " this my kingdom";

const neStr = str4
  .trim()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(neStr);
