let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let counter = 0;
let newChars = new Set(chars);
newChars.forEach(function (ele) {
    if (typeof ele === "number") {
        counter++;
        newChars.delete(ele);
    }
});
let last = [...newChars];
for (let i = 0; i < counter; i++) {
    last.unshift(i)
}

console.log(last.copyWithin(0, counter, counter * 2));


//  Needed Output
//  ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']