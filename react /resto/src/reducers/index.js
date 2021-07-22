const InitialState = {
    menu: [],
    loading: true,
    error: false,
    items: [
        {
			"title": "Cesar salad",
			"price": 12,
			"url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
			"category": "salads",
			"id": 1
		}
    ]
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
            }
        default:
            return state;
    }
}
export default reducer;