'use strict';
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import form from './modules/form';
import cards from './modules/cards';
import calculator from './modules/calculator';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () =>{

    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 5000);
    
tabs('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
timer('.timer', '2021-10-30');

slider({
container:'.offer__slider',
slide: '.offer__slide',
nextArrow: '.offer__slider-next',
prevArrow: '.offer__slider-prev',
totalCounter: '#total',
currentCounter: '#current',
wrapper: '.offer__slider-wrapper',
field: '.offer__slider-inner' 
});//дестуктуризация

modal('[data-modal]', '.modal', modalTimer);
form('.modal', modalTimer, 'form');
cards();
calculator();

});

// const prev = document.querySelector('.offer__slider-prev'),
//       next = document.querySelector('.offer__slider-next'),
//       slides = document.querySelectorAll('.offer__slide'),
//       index = document.querySelector('#current'),
//       total = document.querySelector('#total');
// let i = 0;
// index.innerHTML = ZeroZer(i);
// total.innerHTML = ZeroZer(slides.length - 1);
// function ZeroZer(num){
//     if(num < 10){
//         return  `0${num + 1}`;
//     } else{
//         return num;
//     }
      
//     }


// function hideslides(){
//     slides.forEach(item => item.classList.add('hide'));
// }
// function showSlide(item){
//       item.classList.add('show');
//       item.classList.remove('hide');
//  }
// hideslides();
// showSlide(slides[i]);
// console.log(slides.length);
// prev.addEventListener('click', () =>{
//     --i;  
// if(i < 0){
//         i = (slides.length - 1) ;
//     }
// hideslides();
// showSlide(slides[i]);
// index.innerHTML = ZeroZer(i);
// });
    
// next.addEventListener('click', () =>{
//     ++i;
//     if (i > (slides.length - 1)){
//         i = 0;
//     }
// hideslides();
// showSlide(slides[i]);
// index.innerHTML =ZeroZer(i);
// });


