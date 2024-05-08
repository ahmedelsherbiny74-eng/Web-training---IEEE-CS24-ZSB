let userName = "Elzero";
userName = userName.toLowerCase();

console.log(userName[0]); // e
console.log(userName.charAt(0)); // e
console.log(userName.slice(0, 1)); // e
console.log(userName.substring(0, 1)); // e
console.log(userName.substr(0, 1)); // e
console.log(userName.substr(0, userName.length - 5).repeat(3)); // eee