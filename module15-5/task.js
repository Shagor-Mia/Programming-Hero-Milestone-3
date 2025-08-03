const fruits = ["aam", "jam", "kathal", "lichu", "kola"];
console.log(fruits[2]);
fruits[1] = "jambura";
console.log(fruits);
//

const tour = ["dhaka", "chittagong", "shylete"];

tour.push("cox bazar");
console.log(tour);
tour.push("khagrachori", "rangamati");
console.log(tour);
tour.pop();
console.log(tour);
//

const books = ["python", "c++", "javascript", "java", "typescript"];

const book = books.includes("javascript");
const printit = book
  ? "javascript is found in this array."
  : "not found in the array";
console.log(printit);
//

const alu = "potato";
const age = 23;
const ar = [];

if (Array.isArray(alu)) {
  console.log("alu  is array");
} else if (Array.isArray(age)) {
  console.log("age is a array");
} else if (Array.isArray(ar)) {
  console.log("ar is the array");
} else {
  console.log("there is no such array");
}
//

const newArray = tour.concat(books);
console.log(newArray);
