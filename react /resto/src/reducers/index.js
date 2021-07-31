const InitialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    price: 0
}

const reducer=(state = InitialState, action)=>{
    switch(action.type){
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return{
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return{
                ...state,
                menu: state.menu,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const [item] = state.menu.filter(item => item.id===id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };
            return{
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case 'ITEM_DELETE_FROM_CART':
            const idItem = action.payload;
            const itemCart = state.items.findIndex(item => item.id===idItem);
            return{
                ...state,
                items: [
                    ...state.items.slice(0,itemCart),
                    ...state.items.slice(itemCart+1)
                ]
            };
            case 'COUNT_PRICE':
            const priceOne = state.items.map(item => item.price);
            const countedPrice = priceOne.reduce(function(acc, val) { return acc + val; }, 0);
            return{
                ...state,
                price: countedPrice
            };
        default:
            return state;
    }
}
export default reducer;