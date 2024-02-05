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

btnCreate.addEventListener('click', () => {
  destroyBoxes();
  createBoxes(input.value);
  input.value = '';
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  const array = new Array(Number(amount)).fill('');

  const markup = array
    .map(arr => {
      arr = `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
      width += 10;
      height += 10;
      return arr;
    })
    .join('');

  if (amount >= 1 && amount <= 100) {
    box.insertAdjacentHTML('beforeend', markup);
  }
}

function destroyBoxes() {
  box.innerHTML = '';
}
