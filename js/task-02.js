const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

let ingredientsListRef = document.querySelector('#ingredients');

const makeListOfIngredients = ingredients =>{
  return ingredients.map(ingredient=>{
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add('item')
  
    return listItem;
  });
}

const listOfIngredients = makeListOfIngredients(ingredients);

// const ingredientsListItems = ingredients.map(ingredient=>{
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add('item')

//   return listItem;
// });

ingredientsListRef.append(...listOfIngredients);
console.log(...listOfIngredients);

