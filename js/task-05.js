// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const massageOutput = document.querySelector("#name-output");
console.log(massageOutput);

function changeName(event) {
  console.log(event.currentTarget.value);

  massageOutput.textContent =
    event.currentTarget.value === "" ? "незнакомец" : event.currentTarget.value;
}

inputEl.addEventListener("input", changeName);
