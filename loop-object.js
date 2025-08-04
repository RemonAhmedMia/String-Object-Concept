// ** for of = use in Array;
// ** for in = use in object

const mobile = {
    brand : "Iphone",
    user : "Farukka",
    price : 1200000,
    camrea : "120mp",
}

for (const prop in mobile) {
    console.log(prop); // show all properties; prop er jaigai jekno nam seoa jai
    console.log(mobile[prop]); //show all values
}

// type-02
const keys = Object.keys(mobile);
console.log(keys); // aray akhare dibe;
for (const key of keys) {
    console.log(key);
   // console.log(key,mobile[key]);
    console.log(key, ":" , mobile[key]); // jeheto array tai for of diye korechi
}
