const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueToChange = document.querySelector('#value');

let counterValue = 0;


increment.addEventListener('click', onClickAddValueHandler);
decrement.addEventListener('click', onClickSubstractValueHandler);

function onClickAddValueHandler(event){
    counterValue+=1;
    valueToChange.textContent = counterValue;
};


function onClickSubstractValueHandler(event){
    counterValue-=1;
    valueToChange.textContent = counterValue;
};

