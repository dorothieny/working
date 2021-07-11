'use strict';

const checkBox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

    if (localStorage.getItem('isChecked')){
        checkBox.checked = true;
    }
    if(localStorage.getItem('bg') === 'changed'){
        form.style.backgroundColor = 'red';}
checkBox.addEventListener('change', ()=>{
 localStorage.setItem('isChecked', true);
});

change.addEventListener('click', ()=>{
 if(localStorage.getItem('bg') === 'changed'){
    localStorage.removeItem('bg');
    form.style.backgroundColor = 'white';
 }else{
     localStorage.setItem('bg', 'changed');
     form.style.backgroundColor = 'red';
 }
});