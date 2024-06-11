let studentName;
let studentAge;
let studentGrade;
let studentAttendance;

studentName = "Braxton Maxton";
studentAge = 68;
studentGrade = "F";
studentAttendance = "Attended";

console.log(studentName);
console.log(studentAge);
console.log(studentGrade);
console.log(studentAttendance);



let num;
let num2;

num = 2;
num2 = 5;

console.log("Add:", num + num2);
console.log("Subtract:", num - num2);
console.log("Multiply:", num * num2);
console.log("Divide:", num / num2);

num += 5; 
num2 *= 2; 

console.log("Changed num after adding:", num);
console.log("Changed num2 after multiplying:", num2);


console.log("num equal to num2", num === num2);
console.log("num bigger than num2", num > num2);
console.log("num less than num2", num < num2);
console.log("num not equal to num2", num !== num2);
console.log("num less than or equal to num2", num <= num2);
console.log("num greater than or equal to num2", num >= num2);

let numpositive = num > 0;
let num2positive = num2 > 0;
console.log("is num positive", numpositive);
console.log("is num2 positive", num2positive);

let isnumeven = num % 2 ==0;
let isnum2even = num2 % 2 == 0;
console.log("is num even", isnumeven);
console.log("is num2 even", isnum2even);
console.log("Is at least one number even?",isnumeven|| isnum2even);