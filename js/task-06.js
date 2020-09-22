// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);
inputEl.style.border = "3px solid #bdbdbd";

const targetLength = inputEl.getAttribute("data-length");
// console.log(targetLength);

inputEl.addEventListener("change", checkLength);

function checkLength(event) {
  //   console.log("значение в поле INPUT - ", event.currentTarget.value);
  //   console.log("количество символов - ", event.currentTarget.value.length);

  if (event.currentTarget.value.length === Number(targetLength)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    const inputValidEl = document.querySelector(".valid");
    // console.log(inputValidEl);
    inputValidEl.style.borderColor = "#4caf50";
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
    const inputInvalidEl = document.querySelector(".invalid");
    // console.log(inputInvalidEl);
    inputInvalidEl.style.borderColor = "#f44336";
  }
  //   console.log(inputEl.classList);
  //   console.log(inputEl);
}
