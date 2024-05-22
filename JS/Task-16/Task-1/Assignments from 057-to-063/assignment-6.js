function multiply(...arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number")
            continue;
        else {
            if (!Number.isInteger(arr[i]))
                arr[i] = Math.floor(arr[i]);
            result *= arr[i];
        }
    }
    console.log(result);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000