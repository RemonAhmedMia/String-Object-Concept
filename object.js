// const subjects = ["bangla" , "English" , "Biology"];
// const bottole = 'apple';
// const bottolrPrice = 45;
// const bottoleColor = "white" ===eivhabe bar bar likha kosto o somoy er bepar er solved er jonno ache object=========

// **===========OBJECT
// JavaScript-এ object হলো key-value pair-এর collection।
// এতে আমরা কোনো ব্যক্তি, জিনিস বা item-এর বিভিন্ন বৈশিষ্ট্য (property) রাখি।
// মনে রাখো:
//  Array হলো value এর list
//  Object হলো key: value এর list

const bottol = {
    brand : 'apple',
    price : 45,
    color : "white",
    isClean : false,
}
// console.log(bottol);

// **উদাহরণ ২: Nested Object (ভিতরের ভিতরে)
const creativeIt = {
    team : ["Rimon" , "Al-amin" , "Shakib"],
    batch : "2409",
    mentor : "MR-Alamin",
    topics : {
        topic : "Javascript",
        duration : "3month",
        boys : 12,
        girls : 10,
    }
}
console.log(creativeIt);

//Orthat object er vitor array,object egula sob rakha jai


// **উদাহরণ ৩: Array of Objects

let users = [
  { name: "Rimon", age: 22 },
  { name: "Tamim", age: 21 },
  { name: "Shakib", age: 23 }
];

console.log(users[1].name); // "Tamim"



const person = {
    name : "Sahkib",
    age : 35,
    profession : "Cricketer",
    "fav place" : ["Cox-bazar" , "bandarban" , "Saint-martin" , "America"],
    beton : 2348758798,
}

// object access korar first way dot (.) diye:
console.log(person.name);

// way 02: bracket diye accecss [] diye:
console.log(person["fav place"]); // ekhane dot deoa jabe na, jodi properties emn gap wala hoi tokhn properties set korte hobe "" er vitor ar access korte hobe [] diye

person.profession = "Teaching"
console.log(person); // to change value
