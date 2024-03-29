function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(getRandomHexColor());

const body = document.querySelector('body');
// console.log(body);

const text = document.querySelector('.color');
// console.log(text);

const btn = document.querySelector('.change-color');
// console.log(btn);

function changeBodyBackroundColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
}

btn.addEventListener('click', changeBodyBackroundColor);
