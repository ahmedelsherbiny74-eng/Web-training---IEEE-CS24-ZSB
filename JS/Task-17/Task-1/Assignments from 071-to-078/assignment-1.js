let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let result = mix.map(function (ele) {
    return isNaN(ele) ? ele : "";
}).reduce(function (acc, ele) {
    return `${acc}${ele}`
});

console.log(result);