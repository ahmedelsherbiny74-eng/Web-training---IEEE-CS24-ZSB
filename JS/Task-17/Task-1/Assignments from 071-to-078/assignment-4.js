let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filtered = numsAndStrings.filter((ele) => !isNaN(ele)).map((ele) => -ele);

console.log(filtered);

// [-1, -10, 10, 20, -5, -3]