let a = 10;
let b = 10;
let c = 170;

if (a >= b && a >= c) {
  console.log("The largest number is: " + a);
} else if (b >= a && b >= c) {
  console.log("The largest number is: " + b);
} else {
  console.log("The largest number is: " + c);
}

let password = "mypassword123";

if (password.length >= 8) {
  console.log("Password is valid (8 or more characters).");
} else {
  console.log("Password must be at least 8 characters.");
}

let day = "Friday";

if (day === "Monday") {
  console.log("Monday -> a starting day");
} 
else if (day === "Tuesday") {
  console.log("Tuesday -> let the work continue");
} 
else if (day === "Wednesday") {
  console.log("Wednesday -> halfway through the week");
} 
else if (day === "Thursday") {
  console.log("Thursday -> almost there");
} 
else if (day === "Friday") {
  console.log("Friday -> the last work day");
} 
else if (day === "Saturday") {
  console.log("Saturday -> time to rest");
} 
else if (day === "Sunday") {
  console.log("Sunday -> prepare for a new week");
} 
else {
  console.log("Invalid day");
}