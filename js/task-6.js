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
  createBoxes(input.value);
  input.value = '';
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;

  const array = [];

  if (amount >= 1 && amount <= 100) {
    for (let index = 0; index < amount; index++) {
      const string = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
      array.push(string);
      size += 10;
    }

    box.insertAdjacentHTML('beforeend', array.join(''));
  }
}

function destroyBoxes() {
  box.innerHTML = '';
}
