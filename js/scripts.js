// Business Logic


// Test5: 'It should check if element contains a 1, replace element to "Beep!", else continue'
// Code:
// const inputRange = 3;
// convertToBeepBoopWont(inputRange)
// Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

// input for DevTools. To be passed by UI logic in the future.
const inputRange = 3;

function convertToBeepBoopWont(inputRange) {
  let rangeArray = [];
  let beepBoopWontArray = [];
  const threeRegExpPattern = new RegExp(/\d*3/);
  const twoRegExpPattern = new RegExp(/\d*2/);
  const oneRegExpPattern = new RegExp(/\d*1/);

  for (i = 0; i <= inputRange; i++) {
    rangeArray.push(i)
  }

  for (const element of rangeArray) {
    if (element.toString().match(threeRegExpPattern)) {
      beepBoopWontArray.push("Won't you be my neighbor?");
    } else if (element.toString().match(twoRegExpPattern)) {
      beepBoopWontArray.push("Boop!");
    } else if (element.toString().match(oneRegExpPattern)) {
      beepBoopWontArray.push("Beep!");
    } else {
      beepBoopWontArray.push(element);
    };
  }

  return beepBoopWontArray;
}

//call function to test in DevTools
convertToBeepBoopWont(inputRange);