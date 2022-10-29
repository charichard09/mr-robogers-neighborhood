// Business Logic
function inputError(name, range) {
//   let nameCheck = name;
//   let rangeCheck = range;

  // if (name === "") {
  //   name = "stranger"
  // } else if (Number.isInteger(parseInt(name))) {
  //   name = name + " (nice to see a fellow robot)";
  // }

  // if (Number.isNaN(parseInt(range))) {
  //   rangeCheck = ["!", "ERR", "OR", "T", "ha", "t", "Wa", "s", "Not", "A", "Num", "b", "er", name, "!"];
  // }
  if (name.trim() === "") {
    return true;
  }
  
  return false;
}

function substituteInputToBeepBoopWont(rangeInputParam, nameInputParam) {
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
  for (const priorLi of Array.from(document.querySelectorAll("li"))) {
    priorLi.remove();
  }
}

function inputToSubstituter() {
  const nameInput = document.getElementById("name-input").value;
  const rangeInput = document.getElementById("number-input").value;

  // inputErrorCheck(nameInput, rangeInput);

  return substituteInputToBeepBoopWont(rangeInput, nameInput);
}

function songOutput(event) {
  event.preventDefault();
  clearSongOutput();

  for (const verse of inputToSubstituter()) {
    let verseLi = document.createElement("li");

    verseLi.append(verse);
    verseLi.setAttribute("class", "list-group-item");
    document.getElementById("song").append(verseLi);
  }
}


window.addEventListener("load", function() {
  const inputForm = document.getElementById("input-form");

  inputForm.addEventListener("submit", songOutput);
});