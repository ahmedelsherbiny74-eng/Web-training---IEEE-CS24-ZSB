function isOmnipresent(arr, val) {
    let counter = 0;
	for (let i = 0; i < 4; i++) {
        arr[i] = arr[i].join("");
        if (arr[i].indexOf(val) !== -1)
            counter++;
    }
    return counter === 4;
};

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));