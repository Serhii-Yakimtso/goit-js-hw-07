// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// < ul id = "gallery" ></ >

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
console.table(images);

const findGalleryList = document.querySelector("#gallery");

// const addImage = images.map((imageElement) => {
//   findGalleryList.style.display = "flex";

//   const galleryElement = document.createElement("li");
//   galleryElement.classList.add("Js-gallery-element");

//   const galleryImage = document.createElement("img");
//   galleryImage.src = imageElement.url;
//   galleryImage.alt = imageElement.alt;
//   galleryImage.width = 240;

//   galleryElement.appendChild(galleryImage);

//   return findGalleryList.appendChild(galleryElement);
// });

const addImage = images.map((imageElement) => {
  const imageEl = `<li class="Js-gallery-element"><img src=${imageElement.url} alt=${imageElement.alt} width="240"></li>`;

  return imageEl;
});

findGalleryList.insertAdjacentHTML("afterbegin", addImage);
findGalleryList.style.display = "flex";
