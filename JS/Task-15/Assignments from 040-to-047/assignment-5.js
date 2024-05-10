let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// First Solution

if (haystack.indexOf("JS") != -1)
    console.log("Found");

// Second Solution

if (haystack.lastIndexOf("JS") != -1)
    console.log("Found");

// Third Solution 

if (haystack.includes("JS") != 0)
    console.log("Found");