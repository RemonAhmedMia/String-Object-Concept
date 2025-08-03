//String Compare

let subject = "chemistry";
let book = "Chemistry" ;
 if (subject === book) {
    console.log("Correct");
 } else {
    console.log("Wrong! Try Again");
 }

//  ==========

let sub = "Chemistry";
let boi = "chemistry";
if (sub.toLowerCase() === boi.toLowerCase()) {
    console.log("Thik Ase Log In koro");
} else {
    console.log("Na Thik Nai ber hou");
}

//  **.toLowerCase() হচ্ছে JavaScript এর একটি string method, যেটা কোন string এর সব অক্ষরকে ছোট হরফে (lowercase) রূপান্তর করে।
// [string.toLowerCase()]

let correctAnswer = "banana";
let userInput = "BANANA";

if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("Correct!");
} else {
    console.log("Wrong!");
}

// **বড় অক্ষরে লিখলেও মিলিয়ে ফেলবে কারণ আমরা দুইটাকেই lowercase করেছি। toUpperCase Same kaj kore


// ================Trim Concept==============

// **.trim() একটি string method যা স্ট্রিং-এর শুরু ও শেষে থাকা ফাঁকা জায়গা (space/tab/newline) কেটে ফেলে।

// .trim() শুধু আগে ও পরে থাকা spaces কেটে দেয়

// মাঝখানের স্পেস ঠিকই থাকে

// 01:trimStart()	শুধু শুরু থেকে কেটে ফেলে;

// 02:trimEnd()	শুধু শেষে থেকে কেটে ফেলে

let creative = "Al-Amin";
let remon = "  Remon"

// মাঝখানে ফাঁকা থাকার কারনে False পার্ট টা নিবে

if (creative === remon) {
    console.log("I Love Creative It");
} else {
    console.log("I Hate Others");
}

// let me solve this

let team = "Mr-alamin";
let member = "  mr-alamin";

if (team.trim().toLowerCase() === member.trim().toLowerCase()) {
    console.log("Hello Programmer");
} else {
    console.log("Bye Creative it");
}
