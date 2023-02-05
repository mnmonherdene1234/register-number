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

const isValid = (register = "") => /^[А-Я][А-Я][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/.test(register);

function getBirthDay(register) {
  const year = +register.slice(2, 4);
  const century = year >= 50 ? 1900 : 2000;
  const fullYear = century + year;
  const month = +register.slice(4, 6);
  const day = +register.slice(6, 8);
  return `${fullYear} он ${month} сарын ${day}-ны өдөр`;
}

const getGender = (register) => {
  const genderNumber = +register[8];
  return genderNumber % 2 === 0 ? "Эмэгтэй" : "Эрэгтэй";
};

function getLocation(register) {
  const locations = {
    А: {
      text: "Архангай",
      image: "" 
    },
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
  };

  return locations[register[0]] || "";
}
