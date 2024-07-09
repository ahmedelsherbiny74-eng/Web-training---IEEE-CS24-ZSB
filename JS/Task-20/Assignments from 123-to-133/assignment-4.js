let theNumber = 100020003000;

console.log(+[...Array.from(new Set(theNumber.toString()), (ele) => ele > 0 ? ele : "")].join(""));

// console.log(+Array.from(new Set(theNumber.toString()), (ele) => ele > 0 ? ele : "").join(""));

//  Needed Output
//  123