document.title = "Register Number";

const registerInput = document.createElement("input");
registerInput.placeholder = "Enter register number";
registerInput.style.marginRight = "0.5rem";
registerInput.style.borderRadius = "10px";
registerInput.style.border = "solid 1px";
registerInput.style.padding = "5px";
registerInput.style.outline = "none";

const submitButton = document.createElement("button");
submitButton.appendChild(document.createTextNode("Submit"));
submitButton.onclick = onSubmit;
submitButton.style.transition = "all 0.3s ease-in";
submitButton.style.color = "black";
submitButton.style.backgroundColor = "lightgreen";
submitButton.style.padding = "7px 15px";
submitButton.style.border = "none";
submitButton.style.borderRadius = "1rem";

const result = document.createElement("div");

document.body.appendChild(registerInput);
document.body.appendChild(submitButton);
document.body.appendChild(result);

function onSubmit() {
  result.innerHTML = "";
  const register = registerInput.value;

  if (isValid(register)) {
    result.style.color = "black";
  } else {
    result.style.color = "red";
    result.innerText = "Invalid register number!";
    return;
  }

  const birthday = document.createElement("p");
  const location = document.createElement("p");
  location.appendChild(document.createTextNode(getLocation(register)));
  result.appendChild(location);
  birthday.appendChild(document.createTextNode(getBirthDay(register)));
  result.appendChild(birthday);
  const gender = document.createElement("p");
  gender.appendChild(document.createTextNode(getGender(register)));
  result.appendChild(gender);
}

function isValid(register = "") {
  if (register.length !== 10) {
    return false;
  }

  for (let i = 0; i < register.length; i++) {
    if (i === 0 || i === 1) {
      if (!isNaN(register[i])) {
        return false;
      }
    } else {
      if (isNaN(register[i])) {
        return false;
      }
    }
  }

  return true;
}

function getBirthDay(register) {
  let birthday = "";

  const yearString = `${register[2]}${register[3]}`;
  const year = +yearString;

  if (year >= 50) {
    birthday += `19${yearString} он`;
  } else {
    birthday += `20${yearString} он`;
  }

  let monthString = `${register[4]}${register[5]}`;
  const month = +monthString;

  if (month > 12) {
    monthString = monthString[1];
  }

  birthday += ` ${monthString} сарын`;

  const day = +`${register[6]}${register[7]}`;

  birthday += ` ${day}-ны өдөр`;

  return birthday;
}

function getGender(register) {
  const genderNumber = +register[8];
  if (genderNumber % 2 === 0) {
    return "Эмэгтэй";
  } else {
    return "Эрэгтэй";
  }
}

function getLocation(register) {
  return {
    А: "Архангай",
    Б: "Баян-Өлгий",
    В: "Баянхонгор",
    Г: "Булган",
    Д: "Говь-Алтай",
    Е: "Дорноговь",
    Ж: "Дорнод",
    З: "Дундговь",
    И: "Завхан",
    Й: "Өвөрхангай",
    К: "Өмнөговь",
    Л: "Сүхбаатар",
    М: "Сэлэнгэ",
    Н: "Төв",
    О: "Увс",
    П: "Ховд",
    Р: "Хөвсгөл",
    С: "Хэнтий",
    Т: "Дархан-Уул",
    Ф: "Орхон",
    Х: "Говьсүмбэр",
    У: "Улаанбаатар",
    Ч: "Улаанбаатар",
  }[register[0]];
}
