let myBirthday = new Date(2004, 0, 1);
let seconds = Math.floor((Date.now() - myBirthday) / 1000);
console.log(`${seconds} Seconds`);
console.log(`${Math.floor(seconds / 60)} Minutes`);
console.log(`${Math.floor(seconds / 60 / 60)} Hours`);
console.log(`${Math.floor(seconds / 60 / 60 / 24)} Days`);
console.log(`${Math.floor(seconds / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.floor(seconds / 60 / 60 / 24 / 30 / 12)} Years`);