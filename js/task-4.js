'use strict';

const emailValue = document.querySelectorAll(
  'input[name="email"]'
);
const passwordValue = document.querySelectorAll(
  'input[name="password"]'
);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const obj = {};
  obj.email = email;
  obj.password = password;

  form.reset();
  console.log(obj);
}

const logIn = document.querySelector('.login-form');

logIn.addEventListener('submit', handleSubmit);
