// Slice=====

// **slice() হচ্ছে JavaScript-এর একটি method যা দিয়ে তুমি string বা array থেকে নির্দিষ্ট অংশ কেটে (copy করে) বের করতে পারো, কিন্তু মূলটা (original) পরিবর্তন হয় না।

// startIndex → কোথা থেকে শুরু করবে (0 থেকে গণনা)

// endIndex → যেখানে থামবে (এই index-এর আগ পর্যন্ত কেটে নেয়, কিন্তু এটি বাদ থাকে)

let address = "Brahmanbaria";
let part = address.slice(2,8);
console.log(part);


// =================Split()

// **.split() হচ্ছে একটি string method, যেটা string কে ভাগ করে একটি array বানায়, নির্দিষ্ট কোনো separator (বিভাজক) দিয়ে।

// **Syntax=string.split(separator)

// separator → কোন চিহ্ন বা অক্ষর দিয়ে ভাগ করবে (যেমন: space, comma, hyphen ইত্যাদি)

// রেজাল্ট হয় একটি array

const sentence = "I am a ggod and hard working person"
console.log(sentence.split()); //Return look like Array;

console.log(sentence.split("")); //devided each and every single word like 'i' 'a' 'm' 'a' 'g' 'o' 'o' 'd'

console.log(sentence.split(" "));  // correct way to devided this return= ['I', 'am', 'a', 'ggod', 'and', 'hard', 'working', 'person'] like this

console.log(sentence.split("a"));  

//split("a") মানে হলো:
//  sentence যেখানেই "a" আছে সেখানে সেগুলো কেটে ফেলা হবে এবং "a" বাদ দিয়ে বাকিটা দিয়ে array তৈরি হবে।


let friendStr = "Rimon,Al-Amin, Shakib,Tamim,Rahim";
let friends = friendStr.split(",");
console.log(friends);  //array diye sob gula k alada upadan baniye felbe like ['Rimon', 'Al-Amin', ' Shakib', 'Tamim', 'Rahim'];
