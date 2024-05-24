function consecutiveSum(n) {
    for (let i = 1; i <= n / 2; i++) {
        let res = 0;
        let j = i;

        while (res < n) {
            res += j;
            j++;
        }

        if (res === n)
            return true;
    }
    return false;
};

// console.log(consecutiveSum(183540))