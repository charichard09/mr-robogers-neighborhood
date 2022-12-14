// Business Logic
function isNotDataType(input, dataTypeParam) {
  if (dataTypeParam === "string" && (input.toString().trim() === "" || Number.isInteger(parseInt(input)))) {
    return true;
  } else if (dataTypeParam === "numberString" && (Number.isNaN(parseInt(input)) || /\d+\s+\w+/.test(input))) {
    return true;
  } else {
    return false;
  }
}

function substituteInputToBeepBoopWont(rangeInputParam, nameInputParam) {
  let beepBoopWontArray = [];

  for (let i = 0; i <= rangeInputParam; i++) {
    if (/\d*3/.test(i.toString())) {
      beepBoopWontArray.push("Won't you be my neighbor " + nameInputParam + "?");
    } else if (/\d*2/.test(i.toString())) {
      beepBoopWontArray.push("Boop!");
    } else if (/\d*1/.test(i.toString())) {
      beepBoopWontArray.push("Beep!");
    } else {
      beepBoopWontArray.push(i.toString());
    };
  }

  return beepBoopWontArray;
}


// UI Logic 
function clearSongOutput () {
  for (const priorLi of Array.from(document.querySelectorAll("li"))) {
    priorLi.remove();
  }

  for (const priorSpan of Array.from(document.querySelectorAll("span"))) {
    priorSpan.remove();
  }
}

function mrRobogersSong() {
  let nameInput = document.getElementById("name-input").value;
  let rangeInput = document.getElementById("number-input").value;
  const errorSpan = document.createElement("span");
  const errorSpan2 = document.createElement("span");

  errorSpan.setAttribute("class", "badge badge-danger");
  errorSpan.append("ERROR: Not a Valid Name Input");
  errorSpan2.setAttribute("class", "badge badge-danger");
  errorSpan2.append("ERROR: Not a Valid Number Input");

  if (isNotDataType(nameInput, "string") && isNotDataType(rangeInput, "numberString")) {
    document.getElementById("name-input").after(errorSpan);
    document.getElementById("number-input").after(errorSpan2)
    return "ERROR";
  } else if (isNotDataType(nameInput, "string")) {
    document.getElementById("name-input").after(errorSpan);
    return "ERROR";
  } else if (isNotDataType(rangeInput, "numberString")) {
    document.getElementById("number-input").after(errorSpan2)
    return "ERROR";
  } 

  return substituteInputToBeepBoopWont(rangeInput, nameInput);
}

function songOutput(event) {
  event.preventDefault();
  clearSongOutput();

  for (const lyric of mrRobogersSong()) {
    let lyricLi = document.createElement("li");

    lyricLi.append(lyric);
    lyricLi.setAttribute("class", "list-group-item");
    document.getElementById("song").append(lyricLi);
  }
}


window.addEventListener("load", function() {
  const inputForm = document.getElementById("input-form");

  inputForm.addEventListener("submit", songOutput);
});