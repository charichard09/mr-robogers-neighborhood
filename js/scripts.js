// Business Logic


// Test1: "It should take a number input from user and create an array from 0-input"
// Code:
// const inputRange = 3;
// let rangeArray = [];
// convertToBeepBoopWont(inputRange);
// Expected Output: rangeArray which contains [0, 1, 2, 3]

// Test2: "It should for..of loop through rangeArray and console.log(element) to confirm loop success"

// input for DevTools. To be passed by UI logic in the future.
const inputRange = 3;

function convertToBeepBoopWont(inputRange) {
  let rangeArray = [];

  for (i = 0; i <= inputRange; i++) {
    rangeArray.push(i)
  }

  return rangeArray;
}

//call function to test in DevTools
convertToBeepBoopWont(inputRange);