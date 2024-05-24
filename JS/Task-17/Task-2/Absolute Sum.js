function getAbsSum(arr) {
	let result = arr.reduce((acc, cur) => cur < 0 ? acc - cur : acc + cur, 0);
    return result;
};

// console.log(getAbsSum([8, 9, 10, 32, 101, -10]));