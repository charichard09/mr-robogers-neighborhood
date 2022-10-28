// Business Logic


// Test6: 'It should check if elements that contain 1, 2, 3 get substituted with precedence in longer input'
// Code:
// const inputRange = 23;
// convertToBeepBoopWont(inputRange)
// Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!",
// "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!",
// "Boop!", "Won't you be my neighbor?"]

// input for DevTools. To be passed by UI logic in the future.
const inputRange = 23;

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