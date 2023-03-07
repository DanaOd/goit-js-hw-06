function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  colorName: document.querySelector('.color'),
  buttonChangeColor: document.querySelector('.change-color'),
};

refs.buttonChangeColor.addEventListener('click', onClickHandler);

function onClickHandler(event) {
  console.log(
    'sayHi',
    getRandomHexColor(),
    document.body.style.backgroundColor,
  );
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.colorName.textContent = randomColor;
}
