let myString = "EElllzzzzzzzeroo";

// Elzero

let result = myString.split("").filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
}).reduce(function (acc, ele) {
    return `${acc}${ele}`;
});

console.log(result);