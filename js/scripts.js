// Business Logic
function convertToBeepBoopWont(rangeInputParam, nameInputParam) {
  let beepBoopWontArray = [];

  for (let i = 0; i <= rangeInputParam; i++) {
    if (i.toString().match(/\d*3/)) {
      beepBoopWontArray.push("Won't you be my neighbor " + nameInputParam + "?");
    } else if (i.toString().match(/\d*2/)) {
      beepBoopWontArray.push("Boop!");
    } else if (i.toString().match(/\d*1/)) {
      beepBoopWontArray.push("Beep!");
    } else {
      beepBoopWontArray.push(i);
    };
  }

  return beepBoopWontArray;
}


// UI Logic 
function clearSongOutput () {
  const priorVersesLi = Array.from(document.querySelectorAll("li"));

  for (const priorVerseLi of priorVersesLi) {
    priorVerseLi.remove();
  }
}

function getUserInput() {
  const rangeInput = parseInt(document.getElementById("number-input").value);
  let nameInput = document.getElementById("name-input").value;

  if (nameInput === "") {
    nameInput = "stranger"
  } else if (Number.isInteger(parseInt(nameInput))) {
    nameInput = nameInput + " (nice to see a fellow robot)";
  }
  if (isNaN(rangeInput)) {
    return ["!", "ERR", "OR", "T", "ha", "t", "Wa", "s", "Not", "A", "Num", "b", "er", nameInput, "!"];
  }

  return convertToBeepBoopWont(rangeInput, nameInput);
}

function sing(event) {
  const singThroughArray = getUserInput();

  clearSongOutput();
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