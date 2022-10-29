// Business Logic
function inputErrorCheck(name, range) {
  let errorArray = [];
  
  if (name.trim() === "" || Number.isInteger(parseInt(name))) {
    errorArray.push(true);
  } else {
    errorArray.push(false);
  }

  if (Number.isNaN(parseInt(range)) || /\d+\s+\d+/.test(range.toString())) {
    errorArray.push(true);
  } else {
    errorArray.push(false);
  }

  return errorArray;
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
  let inputErrorArray = inputErrorCheck(nameInput, rangeInput);

  if (inputErrorArray.includes(true)) {
    const errorSpan = document.createElement("span");
    const errorSpan2 = document.createElement("span");

    errorSpan.setAttribute("class", "badge badge-danger");
    errorSpan.append("ERROR: Not a Name");
    errorSpan2.setAttribute("class", "badge badge-danger");
    errorSpan2.append("ERROR: Not a Number");
    
    if (inputErrorArray.indexOf(true) === 0 && inputErrorArray.indexOf(true, 1) === 1) {
      document.getElementById("name-input").after(errorSpan);
      document.getElementById("number-input").after(errorSpan2);
    } else if (inputErrorArray.indexOf(true) === 0) {
      document.getElementById("name-input").after(errorSpan);
    } else {
      document.getElementById("number-input").after(errorSpan2);
    }
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