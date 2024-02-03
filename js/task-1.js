'use strict';
const categories = document.querySelector('#categories');
// console.log(categories);
const titles = document.querySelectorAll('h2');
// console.log(titles);

console.log(
  `Number of categories: ${categories.children.length}`
);

titles.forEach(title => {
  console.log(`Category: ${title.textContent}`);
  console.log(
    `Elements: ${title.nextElementSibling.children.length}`
  );
});
