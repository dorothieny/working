const menuLoaded = (newMenu)=> {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = ()=> {
    return {
        type: 'MENU_REQUESTED'
    }
};
const menuError = ()=> {
    return {
        type: 'MENU_ERROR'
    }
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}
const deletedFromCart = (id) => {
    return {
        type: 'ITEM_DELETE_FROM_CART',
        payload: id
    }
}
const changePrice = ()=>{
    return{
        type: 'COUNT_PRICE'
    }
}





export {menuLoaded};
export {menuRequested};
export {menuError};
export {addedToCart};
export {deletedFromCart};
export {changePrice};