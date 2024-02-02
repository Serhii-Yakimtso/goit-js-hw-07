function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector(
  'button[data-create]'
);
const btnDestroy = document.querySelector(
  'button[data-destroy]'
);
const input = document.querySelector('input');
const box = document.querySelector('#boxes');

function createBoxes() {
  while (box.firstChild) {
    box.firstChild.remove();
  }

  let width = 30;
  let height = 30;

  if (input.value >= 1 && input.value <= 100) {
    for (let i = 0; i < input.value; i++) {
      box.insertAdjacentHTML('beforeend', `<div></div>`);
      const lastChild = box.lastElementChild;
      lastChild.style.width = `${width}px`;
      lastChild.style.height = `${height}px`;
      lastChild.style.backgroundColor = getRandomHexColor();
      width += 10;
      height += 10;
    }
  }
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', () => {
  while (box.firstChild) {
    box.firstChild.remove();
  }
  input.value = '';
});
