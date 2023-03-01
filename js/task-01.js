const categoriesListEl = document.querySelector('#categories');
let subCategories = categoriesListEl.children;

//1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
console.log(`Number of categories: ${subCategories.length}
    `);



//2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
// (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
const subCategoriesArr = [...subCategories];

subCategoriesArr.forEach(listItem => {

    const titleEl = listItem.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);

    const elementsEl = listItem.querySelectorAll('li');
    console.log(`Elements: ${elementsEl.length}
    `);

});