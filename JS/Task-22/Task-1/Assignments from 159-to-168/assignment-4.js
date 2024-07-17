console.log(new Date(2004, 0, 1));


console.log(new Date("2004-1-1"));


let myBirthday = new Date();
myBirthday.setFullYear(2004);
myBirthday.setMonth(0);
myBirthday.setDate(1)
myBirthday.setHours(0);
myBirthday.setMinutes(0);
myBirthday.setSeconds(0);

console.log(myBirthday);

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"