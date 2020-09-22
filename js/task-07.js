// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// console.log(fontSizeControl);
// console.log(textEl);

fontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  const minFontSize = 16;
  const newFontSize = Number(event.currentTarget.value);

  //   console.log(newFontSize);

  textEl.style.fontSize = minFontSize * (newFontSize / 100 + 1) + "px";
}
