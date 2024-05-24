let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, cur) => cur % 2 == 0 ? acc * cur : acc + cur, 1);

console.log(result);

// 500