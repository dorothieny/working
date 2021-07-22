import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';


const CartTable = ({items, onDelete}) => {


    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item=>{
                        const{title, price, url ,id} = item;
                        return(
                        <div key={id}
                        className="cart__item">
                            <img src={url} 
                            className="cart__item-img" 
                            alt="Food img"></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div 
                            onClick={()=>onDelete(id)}
                            className="cart__close">&times;</div>
                        </div>
                        )
                    })
                }
    
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return{
        items 
    }
};

const mapDispatchToProps = () => {
    return{
        onDelete: (id)=> {console.log(`deletes ${id}`);
    }
   
    }
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));