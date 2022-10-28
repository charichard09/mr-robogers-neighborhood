// Business Logic
function convertToBeepBoopWont(inputRangeParam, nameInputParam) {
  let rangeArray = [];
  let beepBoopWontArray = [];
  const threeRegExpPattern = new RegExp(/\d*3/);
  const twoRegExpPattern = new RegExp(/\d*2/);
  const oneRegExpPattern = new RegExp(/\d*1/);

  for (i = 0; i <= inputRangeParam; i++) {
    rangeArray.push(i)
  }

  for (const element of rangeArray) {
    if (element.toString().match(threeRegExpPattern)) {
      beepBoopWontArray.push("Won't you be my neighbor " + nameInputParam + "?");
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
function clearSong () {
  const priorVersesLi = Array.from(document.querySelectorAll("li"));

  for (const priorVerseLi of priorVersesLi) {
    priorVerseLi.remove();
  }
}

function getUserInput() {
  const inputRange = parseInt(document.getElementById("number-input").value);
  let nameInput = document.getElementById("name-input").value;

  if (nameInput === "") {
    nameInput = "stranger"
  } else if (Number.isInteger(parseInt(nameInput))) {
    nameInput = nameInput + " (nice to see a fellow robot)";
  }
  if (isNaN(inputRange)) {
    return ["!", "ER", "R", "OR", "T", "ha", "t", "Wa", "s", "Not", "A", "Num", "b", "er", nameInput, "!"];
  }

  return convertToBeepBoopWont(inputRange, nameInput);
}

function sing(event) {
  const singThroughArray = getUserInput();

  clearSong();
  for (const verse of singThroughArray) {
    let verseLi = document.createElement("li");

    verseLi.append(verse);
    verseLi.setAttribute("class", "list-group-item");
    document.getElementById("song").append(verseLi);
  }

  event.preventDefault();
}


window.addEventListener("load", function() {
  const inputForm = document.getElementById("input-form");

  inputForm.addEventListener("submit", sing);
});