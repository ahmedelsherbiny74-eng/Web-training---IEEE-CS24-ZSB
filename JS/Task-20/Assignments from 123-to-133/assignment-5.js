let theName = "Elzero";


console.log([...new Set(theName)]);
console.log(Array.from(new Set(theName)));
console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));


let newName = [];
for (let i = 0; i < theName.length; i++) {
    newName.push(theName[i]);
}
console.log(newName);

let secName = Object.assign([], theName);
console.log(secName);


//  Needed Output
//  ['E', 'l', 'z', 'e', 'r', 'o']