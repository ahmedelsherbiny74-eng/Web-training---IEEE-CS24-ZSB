let points = 10;

points = ++points + ++points % --points + true;

console.log(points); // 13

points = --points - true - true - true - true;

console.log(points); // 8;