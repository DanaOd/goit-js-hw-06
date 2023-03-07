function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  container: document.querySelector('#boxes'),
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

refs.createBtn.addEventListener('click', createBoxes);
let markUp = '';

function createBoxes(amount) {
  amount = refs.input.value;
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    markUp += `<div style="width:${width}px; height:${height}px; background-color:${getRandomHexColor()};"></div>`;
    width += 10;
    height += 10;
  }

  refs.container.insertAdjacentHTML('afterBegin', markUp);
}

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.container.innerHTML = '';
}
