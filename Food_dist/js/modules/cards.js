import {getResource} from '../services/services';
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
export default cards;