// Code your solution in this file!
// The driver list (won’t change!)
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Picks the first 2 drivers without changing the list
function returnFirstTwoDrivers(driversArray) {
    return driversArray.slice(0, 2); // Copies first 2: ['Antonia', 'Nuru']
}

// Picks the last 2 drivers without changing the list
function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2); // Copies last 2: ['Amari', 'Mo']
}

// A box holding both picker functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Makes a robot that multiplies fares by a number you choose
function createFareMultiplier(multiplier) {
    return function(fare) { // Returns a new robot
        return fare * multiplier; // Multiplies the fare
    };
}

// Doubles fares (uses createFareMultiplier with 2)
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare); // Fare * 2
}

// Triples fares (uses createFareMultiplier with 3)
function fareTripler(fare) {
    return createFareMultiplier(3)(fare); // Fare * 3
}

// Picks drivers using the robot you give it
function selectDifferentDrivers(driversArray, pickerFunction) {
    return pickerFunction(driversArray); // Runs the picker on the drivers
}

// Export everything for the tests
