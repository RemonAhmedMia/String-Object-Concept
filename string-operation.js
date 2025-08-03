// Slice=====

// **slice() হচ্ছে JavaScript-এর একটি method যা দিয়ে তুমি string বা array থেকে নির্দিষ্ট অংশ কেটে (copy করে) বের করতে পারো, কিন্তু মূলটা (original) পরিবর্তন হয় না।

// startIndex → কোথা থেকে শুরু করবে (0 থেকে গণনা)

// endIndex → যেখানে থামবে (এই index-এর আগ পর্যন্ত কেটে নেয়, কিন্তু এটি বাদ থাকে)

let address = "Brahmanbaria";
let part = address.slice(2,8);
console.log(part);
