let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce((acc, cur) => acc.concat(cur), []).join("");

console.log(result);

// Elzero