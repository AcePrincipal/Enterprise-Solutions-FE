function optionReducer(state = {}, action){
    switch(action.type){
        case "A":
            return state = true;
        default:
            return state;
    }
}

export default optionReducer;