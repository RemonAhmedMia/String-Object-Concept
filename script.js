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