function sevenBoom(arr) {
    for (let i = 0; i < arr.length; i++)
        while(arr[i] > 1) {
            if (arr[i] % 10 == 7)
                return "Boom!";
            arr[i] = Math.floor(arr[i] / 10);
        }
    return "there is no 7 in the array";
}

// console.log(sevenBoom([76, 55, 44, 32]));