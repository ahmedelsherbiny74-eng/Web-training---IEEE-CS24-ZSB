function checkStatus(a, b, c) {
    let name, age, status;
    if (typeof a === "string") {
        name = a;
        if (typeof b === "number") {
            age = b;
            status = c;
        }
        else {
            age = c;
            status = b;
        }
    }
    else if (typeof b === "string") {
        name = b;
        if (typeof a === "number") {
            age = a;
            status = c;
        }
        else {
            age = c;
            status = a;
        }
    }
    else {
        name = c;
        if (typeof a === "number") {
            age = a;
            status = b;
        }
        else {
            age = b;
            status = a;
        }
    }
    if (status === false)
        status = " Not";
    else 
        status = "";

    console.log(`Hello ${name}, Your Age Is ${age}, You Are${status} Available For Hire`)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"