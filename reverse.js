let learn = "My name is Remon";
let reverse = '';
for(const letter of learn) {
    reverse = letter + reverse;
}
console.log(reverse); //Output:nomeR si eman yM


// 02: shortcut
const reversed = learn.split("").reverse().join("");
console.log(reversed);
