const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

console.log(inputEl, outputEl);

let nameValue = '';

inputEl.addEventListener('keydown', onKeyDownHandler);

function onKeyDownHandler(event) {
  nameValue += event.key;
  outputEl.textContent = nameValue;
}
