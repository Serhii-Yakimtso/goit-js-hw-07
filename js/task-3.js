'use strict';
const nameInput = document.querySelector('#name-input');
console.log(nameInput);
const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);

nameInput.addEventListener('input', e => {
  let name = '';
  const space = '     ';
  if (e.currentTarget.value !== '') {
    name = e.currentTarget.value.trim();
  } else if (
    //   Доопрацювати
    e.currentTarget.value.trim() !== space.trim()
  ) {
    name = 'Anonymous';
  } else {
    name = 'Anonymous';
  }

  nameOutput.textContent = name;
});
