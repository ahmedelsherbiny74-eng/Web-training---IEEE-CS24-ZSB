function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100)
        console.log(`Age Out Of Range`);
    else {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 12 * 4} Weeks`);
        console.log(`${theAge * 12 * 4 * 7} Days`);
        console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minutes`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months