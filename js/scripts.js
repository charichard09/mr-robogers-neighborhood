// Business Logic


// Test2: "It should for..of loop through rangeArray and console.log(element) to confirm loop success"
// Code:
// const inputRange = 3;
// convertToBeepBoopWont(inputRange)
// Expected Output: 
// 0
// 1
// 2
// 3

// input for DevTools. To be passed by UI logic in the future.
const inputRange = 3;

function convertToBeepBoopWont(inputRange) {
  let rangeArray = [];

  for (i = 0; i <= inputRange; i++) {
    rangeArray.push(i)
  }

  for (const element of rangeArray) {
    console.log(element);
  }

  return undefined;
}

//call function to test in DevTools
convertToBeepBoopWont(inputRange);