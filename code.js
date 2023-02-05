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
  const register = registerInput.value.trim().toUpperCase();

  if (isValid(register)) {
    result.style.color = "black";
  } else {
    result.style.color = "red";
    result.innerText = "Invalid register number!";
    return;
  }

  const birthday = document.createElement("p");
  const location = document.createElement("p");
  const locationImg = document.createElement("img");
  locationImg.height = 300;
  result.appendChild(locationImg);
  const locationObj = getLocation(register);
  locationImg.src = locationObj.image;
  locationImg.style.marginTop = "1rem";
  location.appendChild(document.createTextNode(locationObj.text));
  result.appendChild(location);
  birthday.appendChild(document.createTextNode(getBirthDay(register)));
  result.appendChild(birthday);
  const gender = document.createElement("p");
  gender.appendChild(document.createTextNode(getGender(register)));
  result.appendChild(gender);
}

const isValid = (register = "") =>
  /^[А-Я][А-Я][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/.test(register);

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
      image: "/images/Архангай.jpeg",
    },
    Б: {
      text: "Баян-Өлгий",
      image: "/images/Баян-Өлгий.jpg",
    },
    В: {
      text: "Баянхонгор",
      image: "/images/Баянхонгор.jpeg",
    },
    Г: {
      text: "Булган",
      image: "/images/Булган.png",
    },
    Д: {
      text: "Говь-Алтай",
      image: "/images/Говь-Алтай.jpeg",
    },
    Е: {
      text: "Дорноговь",
      image: "/images/Дорноговь.jpg",
    },
    Ж: {
      text: "Дорнод",
      image: "/images/Дорнод.jpeg",
    },
    З: {
      text: "Дундговь",
      image: "/images/Дундговь.jpeg",
    },
    И: {
      text: "Завхан",
      image: "/images/Завхан.jpeg",
    },
    Й: {
      text: "Өвөрхангай",
      image: "/images/Өвөрхангай.jpeg",
    },
    К: {
      text: "Өмнөговь",
      image: "/images/Өмнөговь.jpg",
    },
    Л: {
      text: "Сүхбаатар",
      image: "/images/Сүхбаатар.jpeg",
    },
    М: {
      text: "Сэлэнгэ",
      image: "/images/Сэлэнгэ.png",
    },
    Н: {
      text: "Төв",
      image: "/images/Төв.jpeg",
    },
    О: {
      text: "Увс",
      image: "/images/Увс.jpg",
    },
    П: {
      text: "Ховд",
      image: "/images/Ховд.jpeg",
    },
    Р: {
      text: "Хөвсгөл",
      image: "/images/Хөвсгөл.jpg",
    },
    С: {
      text: "Хэнтий",
      image: "/images/Хэнтий.jpg",
    },
    Т: {
      text: "Дархан-Уул",
      image: "/images/Дархан-Уул.jpgI",
    },
    Ф: {
      text: "Орхон",
      image: "/images/Орхон.jpeg",
    },
    Х: {
      text: "Говьсүмбэр",
      image: "/images/Говьсүмбэр.jpeg",
    },
    У: {
      text: "Улаанбаатар",
      image: "/images/Улаанбаатар.jpg",
    },
    Ч: {
      text: "Улаанбаатар",
      image: "/images/Улаанбаатар.jpg",
    },
  };

  return locations[register[0]] || "";
}
