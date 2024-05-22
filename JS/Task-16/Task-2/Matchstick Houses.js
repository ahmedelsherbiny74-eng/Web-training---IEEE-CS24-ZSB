function matchHouses(step) {
	if (step === 0)
        return 0;
    else 
        return 6 * step - step + 1;
}

// console.log(matchHouses(87));