// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное
//  количество введённых символов.

//  Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//  Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
//  Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onBlurHandler);

function onBlurHandler(event) {
  let currentLength = inputRef.value.length;

  if (currentLength == Number(inputRef.dataset.length)) {
    // console.log(
    //   'currentLength, currentLength',
    //   currentLength,
    //   Number(inputRef.dataset.length),
    // );

    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}
