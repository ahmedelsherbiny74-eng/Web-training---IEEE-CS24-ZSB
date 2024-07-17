let time1 = performance.now();

for (let i = 1; i <= 99999; i++) {
    console.log(i);
}

let time2 = performance.now();

console.log(`Loop Took ${Math.floor(time2 - time1)} Milliseconds.`);