// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ >
//     В JS есть массив строк.

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const findIngredientsList = document.querySelector("#ingredients");
// console.log(findIngredientsList);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
console.table(ingredients);

// const addIngredientsEl = ingredients.map((ingredient) => {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = ingredient;
//   //   console.log(ingredientEl);
//   return findIngredientsList.appendChild(ingredientEl);
// });

const addIngredientsEl = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  // console.log(ingredientEl);
  // console.log(ingredientEl.textContent);
  return ingredientEl;
});
// console.log(addIngredientsEl);
findIngredientsList.append(...addIngredientsEl);
