// Business Logic


// Test3: 'It should check if element contains a 3, replace element to "Won't you be my neighbor?" and push to let beepBoopWontArray, else continue'
// Code:
// const inputRange = 3;
// let beepBoopWontArray = [];
// convertToBeepBoopWont(inputRange)
// Expected Output: [0, 1, 2, "Won't you be my neighbor?"]

// input for DevTools. To be passed by UI logic in the future.
const inputRange = 3;

function convertToBeepBoopWont(inputRange) {
  let rangeArray = [];
  let beepBoopWontArray = [];
  const threeRegExpPattern = new RegExp(/\d*3/);

  for (i = 0; i <= inputRange; i++) {
    rangeArray.push(i)
  }

  for (const element of rangeArray) {
    if (element.toString().match(threeRegExpPattern)) {
      beepBoopWontArray.push("Won't you be my neighbor?");
    } else {
      beepBoopWontArray.push(element);
    };
  }

  return beepBoopWontArray;
}

//call function to test in DevTools
convertToBeepBoopWont(inputRange);