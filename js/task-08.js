const refs = {
  form: document.querySelector('.login-form'),
  email: document.querySelector("[name='email']"),
  password: document.querySelector("[name='password']"),
};

const credentials = {};

refs.form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();

  let emailValue = event.currentTarget.elements.email.value;
  let passwValue = event.currentTarget.elements.password.value;

  if (emailValue === '' || passwValue === '') {
    return console.log('Please fill in all the fields!');
  } else {
    credentials.email = emailValue;
    credentials.password = passwValue;
    console.log(credentials);
    refs.email.value = '';
    refs.password.value = '';
  }
}
