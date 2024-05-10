let start = 0;
let swappedName = "elZerO";
let test = [];
for (i = start; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toLowerCase())
        test.push(swappedName[i].toUpperCase());
    else
        test.push(swappedName[i].toLowerCase());
}
console.log(test.join(""));
/* Output
"ELzERo" */