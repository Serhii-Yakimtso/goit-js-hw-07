// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const findCategoryById = document.querySelector("#categories");
// console.log(findCategoryById);

const findListItems = findCategoryById.children;
// console.log(findListItems);
// console.log(findListItems.length);

console.log(`В списке ${findListItems.length} категории.`);

const descriptionCategory = function (array) {
  for (let i = 0; i < findListItems.length; i += 1) {
    console.log(
      `Категория: `,
      array[i].querySelector(".item > h2").textContent
    );
    console.log(
      `Количество элементов: `,
      array[i].querySelector(".item > ul").children.length
    );
  }
};

console.log(descriptionCategory(findListItems));
