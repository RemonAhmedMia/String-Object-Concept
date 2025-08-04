// **যখন কোনো Object-এর ভেতরে আরেকটি Object থাকে — তখন তাকে Nested Object বলে।

const cit = {
    address : "Dhanmondi-5",
    batch : "2409",
    teacher : "Al-Amin",
    unique : {
        students : "friendly",
        class : ["11am" , "12pm" , "13am"],
        color : "Joss",
        branch : {
            dhaka : "4ta branch",
            chittogong : "1ta",
            brahmanbaria : "nei sad very sad",
        }
    }
}
console.log(cit); // for find full object property,
console.log(cit.unique); //cit object er vitor unique object ta k dhorar jonno;
console.log(cit.unique.branch); //evhabe eker por ek nested object catch korbo;

// ekhon amra object er value change korte chaile

cit.unique.color = "very joss";
console.log(cit.unique.color); //value change hoiye very jss hoiye jabe;

// Kono kichu delete korte chaile
delete cit.unique.branch; // eivhabe access kore dile delete kora jabe any property
console.log(cit);
