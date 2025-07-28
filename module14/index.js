// free drinks

const burger = 501;

if (burger > 500) {
  console.log("free Coke");
} else {
  console.log("Coke is 30 taka");
}

// bmi calculator
let weight = 70; // in kg
let height = 1.6; // in meters
let bmi = weight / height ** 2;

console.log("Your BMI is: " + bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("You have a normal weight.");
} else if (bmi >= 25 && bmi < 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese.");
}

// grade calculator
let marks = 85;
if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks < 89) {
  console.log("B");
} else if (marks >= 70 && marks < 79) {
  console.log("C");
} else if (marks >= 60 && marks < 69) {
  console.log("D");
}

// 4 nested-friends
let myFriend = 20;
let myMarks = 0;
if (myMarks > 80) {
  if (myFriend > 80) {
    console.log("we will go for a lunch");
  } else if (myFriend < 80 && myFriend >= 60) {
    console.log("good luck next time");
  } else if (myFriend < 60 && myFriend >= 40) {
    console.log("unseen message");
  } else if (myFriend < 40) {
    console.log("blocked my friend");
  } else {
    console.log("I will not go to the party");
  }
} else {
  console.log("go to sleep acted sad.");
}

//  ternary operator
let num1 = 21;
let num2 = 12;
let max = num1 > num2 ? num1 * num1 : num1 + num2;
console.log("The maximum number is: " + max);

//bus ticket
let children = 12;
let child = true;
let students = true;
let senior_citizen = 61;
let regular = true;
price = 70;

if (regular) {
  if (!child) {
    if (children < 10) {
      console.log("free to travel");
    } else {
      console.log("should by ticket");
    }
  } else if (students) {
    price = price * (1 - 50 / 100);
    console.log("student 50% free then ticket is: " + price);
  } else if (senior_citizen >= 60) {
    price = price * (1 - 15 / 100);
    console.log("senior_citizen 15% free then ticket is: " + price);
  }
} else {
  console.log("you are not allowed to travel");
}
