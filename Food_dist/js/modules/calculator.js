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
export default calc;