// Business Logic

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


// UI Logic 


//call function somewhere
convertToBeepBoopWont(inputRange);