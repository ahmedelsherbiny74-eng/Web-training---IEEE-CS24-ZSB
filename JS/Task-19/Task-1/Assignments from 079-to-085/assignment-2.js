// Method One
// Create Your Object Here

let objMethodOne = {
    property: "good",
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = new Object({
    property: "good",
});
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

let objMethodThree = Object.create({
    property: "good",
})
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

let objMethodFour = Object.assign({property: "good"})
console.log(objMethodFour.property); // "Method Four"