let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let newInfo = new Map(Object.entries(myInfo));
console.log(newInfo);
console.log(newInfo.size);
console.log(newInfo.has("role"));

//  Needed Output
//  Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//  3
//  true