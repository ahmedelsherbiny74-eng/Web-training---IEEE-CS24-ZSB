let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let result = [...numsOne, ...numsTwo];
let result2 = [...Array.from(numsOne), ...Array.from(numsTwo)];
let result3 = numsOne.concat(numsTwo);

console.log(result);
console.log(result2);
console.log(result3);

// Needed Output
// [1, 2, 3, 4, 5, 6]