function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        for (let i = 0; i < zName.length; i++)
            if (zName[i] === ' ')
                return `Hello ${zName.substring(0, i)} ${zName[i + 1].toUpperCase()}.,`;
    }
    function ageWithMessage(zAge) {
        return ` Your Age Is ${zAge.substring(0, 2)},`;
    }
    function countryTwoLetters(zCountry) {
        return ` You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
    }
    function fullDetails() {
      return namePattern(zName) + ageWithMessage(zAge) + countryTwoLetters(zCountry);
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY