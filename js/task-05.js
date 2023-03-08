const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

console.log(inputEl, outputEl);

let nameValue = '';

inputEl.addEventListener('input', onKeyDownHandler);

function onKeyDownHandler(event) {
  nameValue = event.currentTarget.value;
  outputEl.textContent = nameValue;
  
  if (nameValue === ""){
    console.log('hi');
    outputEl.textContent = "Anonymous";
  }
}
