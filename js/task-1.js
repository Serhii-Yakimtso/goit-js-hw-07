'use strict';

const items = document.querySelectorAll('.item');
// console.log(items);

const titles = document.querySelectorAll('h2');
// console.log(titles);

titles.forEach(title => {
  return console.log(
    `${title.textContent}: ${title.nextElementSibling.children.length}`
  );
});
