'use strict';
const nameInput = document.querySelector('#name-input');
// console.log(nameInput);
const nameOutput = document.querySelector('#name-output');
// console.log(nameOutput);

nameInput.addEventListener('input', e => {
  const name = e.currentTarget.value.trim();
  nameOutput.textContent = name ? name : 'Anonymous';
});
