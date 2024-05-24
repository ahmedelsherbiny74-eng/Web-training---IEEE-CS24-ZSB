function squareDigits(n) {
    n = n.toString();
    let result = [];
    for (let i = 0; i < n.length; i++) {
        let a = parseInt(n[i]);
        result.push(a * a);
    }
    return parseInt(result.join(""));
};

// console.log(squareDigits(9119));