const initialState = {
    products: [],
    total: 0
}

function productsReducer(state = initialState, action){
    switch(action.type){
        case "FETCH_PRODUCTS":
            return {
                ...state, 
                products: action.payload
            };
        case 80:
            return {
                ...state, 
                total: state.total+80
            }
        case 60:
            return {
                ...state, 
                total: state.total+60
            }
        case 40:
            return {
                ...state, 
                total: state.total+40
            }
        default:
            return state;
    }
}

export default productsReducer;