/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc(){
    const result = document.querySelector('.calculating__result span');


let sex , 
height, 
weight, 
age, 
ratio;
if(localStorage.getItem('sex')){
    sex = localStorage.getItem('sex');
}else{
    sex = "female";
    localStorage.setItem('sex', "female");
}

if(localStorage.getItem('ratio')){
    ratio = localStorage.getItem('ratio');
}else{
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
}
setActiveDefault('#gender', 'calculating__choose-item_active');
setActiveDefault('.calculating__choose_big', 'calculating__choose-item_active');
function setActiveDefault(parent,activeClass,i){
    const elements = document.querySelectorAll(`${parent} div`);
    elements.forEach(item=>{
        item.classList.remove(activeClass);
        if(item.getAttribute('id')== localStorage.getItem('sex')){
            item.classList.add(activeClass);
        }
        if(item.getAttribute('data-ratio') == localStorage.getItem('ratio')){
            item.classList.add(activeClass);

        }
    });
    
}

function calcTotal(){
    //предусматриваем момент что должны быть заполнены все поля для рассчетов
    if(!sex || !height || !weight || !age || !ratio){
        result.textContent = "__";
        return;
    }
    if(sex === "female"){
        result.textContent = ((447.6+(9.2*weight)+ (3.1* height) - (4.3*age))*ratio).toFixed(0);
    }else{
        result.textContent = ((88.36+(13.4*weight)+ (4.8* height) - (5.7*age))*ratio).toFixed(0);
    }
}
calcTotal();


function getStaticInform(parent, activeClass){
    const elements = document.querySelectorAll(`${parent} div`);
    document.querySelector(parent).addEventListener('click', (e)=>{
 if(e.target.getAttribute('data-ratio')){
     ratio = +e.target.getAttribute('data-ratio');
     localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
 } else{
     sex = e.target.getAttribute('id');
     localStorage.setItem('sex', e.target.getAttribute('id'));
 }


elements.forEach(item =>{
item.classList.remove(activeClass);
if(e.target == item){
item.classList.add(activeClass);
}
 });
calcTotal();
});

}
getStaticInform('#gender', 'calculating__choose-item_active');
getStaticInform('.calculating__choose_big', 'calculating__choose-item_active');

function getDynamicInform(selector){
    const input = document.querySelector(selector);

    input.addEventListener('input', ()=>{

        if(input.value.match(/\D/g)){
            input.style.border = "1px solid red";
        } else{
            input.style.border = "none";
        }
switch(input.getAttribute('id')){
    case 'height':
        height = +input.value;
        break;
    case 'weight':
        weight = +input.value;
        break;
    case 'age':
        age = +input.value;
        break;
}
calcTotal();
    });
    
}
getDynamicInform('#height');
getDynamicInform('#weight');
getDynamicInform('#age');

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards(){
    class Card{
        constructor(img, subtitle, describe, price, parentSelector, ...classes){
            this.img = img;
            this.subtitle = subtitle;
            this.describe = describe;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
    
        changeToUAH(){
            this.price = this.price*this.transfer;
        }
        render(){
          const element = document.createElement('div');
          if(this.classes.length === 0){
            element.classList.add('menu__item');
          } else{
            this.classes.forEach(className => element.classList.add(className));
          }
          
          element.innerHTML = `<img src=${this.img} alt="post">
          <h3 class="menu__item-subtitle">Меню ${this.subtitle}</h3>
          <div class="menu__item-descr">${this.describe}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>`;
      this.parent.append(element);
        }
    }
    
    const getResource = async (url)=>{
     const res = await fetch(url);
     if(!res.ok){
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
     }
     return await res.json();
    };
    
    // getResource('http://localhost:3000/menu')//получаем массив мы его перебираем и может деструктуризировать
    // .then(data =>{
    //     data.forEach(({img, title, descr, price})=>{
    //  new Card(img, title, descr, price, '.menu .container' ).render(); 
    //     });
    // });
    
    axios.get('http://localhost:3000/menu')
    .then(data =>{
        data.data.forEach(({img, title, descr, price})=>{
            new Card(img, title, descr, price, '.menu .container' ).render(); 
             });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function form(modalSelector, modalTimer, formSelector){

    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо, мы с вами свяжемся',
        failure: 'ЧТо-то пошло не так...'
    };
    
    forms.forEach(item =>{
     postData(item);
    });
    

    function postData(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
    const statusMessage = document.createElement('img');
    statusMessage.src = message.loading;
    statusMessage.style.cssText =`
        display:block;
        margin: 0 auto;
    `;
    form.after(statusMessage);
    
    const formData = new FormData(form);
    
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
    (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postingData)('http://localhost:3000/requests', json)
    .then(data => {
        console.log(data);//какие-то нечеткие данные response
        showThanksModal(message.success, modalSelector);
        statusMessage.remove();
    })
    .catch(() => {
        showThanksModal(message.failure, modalSelector);
    })
    .finally(()=>{
        form.reset();
    });
    });
    }
    
    //form post-modal 
    
    function showThanksModal(message, modalSelector){
        const modalDialog = document.querySelector('.modal__dialog');
        modalDialog.style.display = 'none'; //не удаляем иначе как пользователь отркое снова его 
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimer);
    
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close >x</div>
        <div class="modal__title">${message}</div>
        </div>`;
        const modal = document.querySelector(modalSelector);
        modal.append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            modalDialog.style.display = 'block'; 
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        },4000);
    }
    
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimer){
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if(modalTimer){
        clearInterval(modalTimer);
    }
    }
    

function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimer){
    const btnmodal = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);




btnmodal.forEach((item)=>{
    item.addEventListener('click', ()=>{
    openModal(modalSelector, modalTimer);
    });
    });


modal.addEventListener('click', (e)=>{
if(e.target === modal || e.target.getAttribute('data-close') == ''){
   closeModal(modalSelector);
}
});
document.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape' && modal.style.display === 'block'){
        closeModal(modalSelector);
    }
});
 function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal(modalSelector, modalTimer);
    window.removeEventListener('scroll', showModalByScroll);
    }
 }
 
window.addEventListener('scroll', showModalByScroll);


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    //slider-navigation
    const slides = document.querySelectorAll(slide), 
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;
    const entireSlider = document.querySelector(container);
    entireSlider.style.position = 'relative';

    const navigation = document.createElement('div');
    navigation.classList.add('carousel-indicators');
    entireSlider.append(navigation);

    for(let i=0; i < slides.length; i++ ){
        navigation.innerHTML += `<div class="dot"></div>`;
    }
    const dots = document.querySelectorAll('.dot');


function dotChange(){
    dots.forEach((item, i) =>{
        if(i == slideIndex - 1){
           item.style.opacity = "100%";
        } else{
            item.style.opacity = "50%";
        }
        
    });
}
//slider 

   if(slides.length < 10){
    total.innerHTML = `0${slides.length}`;
    }else{
    total.innerHTML = slides.length;
}
    changeIndex(slideIndex);

    function changeIndex(count){
        if(count < 10){
        current.innerHTML = `0${count}`;
    } else{
        current.innerHTML = count;
    }
    }
    slidesField.style.width = 100*slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = 'all .5s ease-in-out';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(item =>{
        item.style.width = width;
    });
    dotChange();

    next.addEventListener('click',()=>{
        if (offset == +width.replace(/\D/g,'')*(slides.length - 1)){
            offset =0;
        }else{
            offset += +width.replace(/\D/g,'');
        }
        slideIndex += 1;
        if(slideIndex > slides.length){
            slideIndex = 1;
        }
        dotChange();
        changeIndex(slideIndex);
        slidesField.style.transform = `translateX(-${offset}px)`;

    });

    prev.addEventListener('click',()=>{
        if (offset == 0){
            offset = +width.replace(/\D/g,'')*(slides.length -1);
        }else{
            offset -= +width.replace(/\D/g,'');
        }
        slideIndex -= 1;
        if(slideIndex < 1){
            slideIndex = slides.length;
        }
        dotChange();
        changeIndex(slideIndex);
        slidesField.style.transform = `translateX(${-offset}px)`;

    });

    navigation.addEventListener('click', (event) =>{
        const target = event.target;

        dots.forEach((item, i) =>{
            if (target == item){
            slideIndex = i+1;
            offset = +width.replace(/\D/g,'')*i;
            changeIndex(slideIndex);
            dotChange();
            slidesField.style.transform = `translateX(${-offset}px)`;
            }  

           
        });
       
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabSelector, tabItem, tabContent, activeClass){
    const tabs = document.querySelectorAll(tabItem),
    tabsContent = document.querySelectorAll(tabContent),
    tabParent = document.querySelector(tabSelector);

function hideTagContent(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
        tabs.forEach(tab =>{
            tab.classList.remove(activeClass);
        });
    }); //скрытие табов
}

function showTabContent(i = 0){
 tabsContent[i].classList.add('show', 'fade');
 tabsContent[i].classList.remove('hide');
 tabs[i].classList.add(activeClass);
} //если функция вызывается без аргумента, то по умолчанию i=0
hideTagContent();
showTabContent();

tabParent.addEventListener('click', (event)=>{
const target = event.target;

tabs.forEach((item, i)=>{
if (target == item){
    hideTagContent();
    showTabContent(i);
}
});
});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline){

function getTimeRemaining(endtime){
 const t = Date.parse(endtime) - Date.parse(new Date()),
 days = Math.floor(t/(1000*60*60*24)),
 hours = Math.floor((t/(1000*60*60) % 24)),
 minutes = Math.floor((t/(1000*60) % 60)),
 seconds = Math.floor((t/(1000)% 60));

 return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
 };
}

function setZero(num){
    if(num >=0 && num <10 ){
return `0${num}`;
    } else{
        return num;
    }
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timerId = setInterval(UpdateClock, 1000);

UpdateClock();

    function UpdateClock(){
    const t = getTimeRemaining(endtime);
    days.innerHTML = setZero(t.days);
    hours.innerHTML = setZero(t.hours);
    minutes.innerHTML = setZero(t.minutes);
    seconds.innerHTML = setZero(t.seconds);

    if (t.total <= 0){
        clearInterval(timerId);
    }
    }
}

setClock(id, deadline);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postingData": () => (/* binding */ postingData)
/* harmony export */ });
const postingData = async (url, data)=>{
    const res = await fetch(url, {
    method: "POST",
    body: data,
    headers:{
    'Content-type': 'application/json'
    }
    });
    return await res.json();
};

// const getResource = async (url)=>{
//      const res = await fetch(url);
//      if(!res.ok){
//         throw new Error(`Could not fetch ${url}, status ${res.status}`);
//      }
//      return await res.json();
//     };
    



//export{getResource};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");










window.addEventListener('DOMContentLoaded', () =>{

    const modalTimer = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('.modal', modalTimer), 5000);
    
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.default)('.timer', '2021-09-11');

(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)({
container:'.offer__slider',
slide: '.offer__slide',
nextArrow: '.offer__slider-next',
prevArrow: '.offer__slider-prev',
totalCounter: '#total',
currentCounter: '#current',
wrapper: '.offer__slider-wrapper',
field: '.offer__slider-inner' 
});//дестуктуризация

(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.default)('[data-modal]', '.modal', modalTimer);
(0,_modules_form__WEBPACK_IMPORTED_MODULE_4__.default)('.modal', modalTimer, 'form');
(0,_modules_cards__WEBPACK_IMPORTED_MODULE_5__.default)();
(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__.default)();

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



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map