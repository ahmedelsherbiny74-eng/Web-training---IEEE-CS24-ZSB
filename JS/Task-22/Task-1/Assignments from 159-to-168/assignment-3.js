let date = new Date(2024, 6);
date.setDate(0);

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(date);
console.log(`Previous Month Is ${months[date.getMonth()]} And Last Day Is ${date.getDate()}`);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

