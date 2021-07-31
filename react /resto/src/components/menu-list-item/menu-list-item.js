import React from 'react';
import './menu-list-item.scss';
import Salad from '../img/salad.png';
import Meat from '../img/steak.png';
import Pizza from '../img/pizza.png'

const MenuListItem = ({menuItem, onSelected, onAddToCart}) => {

    const{title, price, url, category,id} = menuItem;
    function Img(){
        switch (category){
            case 'salads':
                return Salad;
            case 'meat':
                return Meat;
            case 'pizza':
                return Pizza;
            default:
                return 'smth';
        }
    };

    return (
            <li className="menu__item"
            >
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="Food img"
                onClick={()=>onSelected(id)}></img>
                <div className="menu__category">Category:
                <img category={category} 
                src={Img()} 
                alt="Food icon"
                ></img>
                </div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={()=>onAddToCart()}className="menu__btn">Add to cart</button>
            </li>
    )
}

export default MenuListItem;