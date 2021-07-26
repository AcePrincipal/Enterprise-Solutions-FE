import { combineReducers } from "redux";
import optionReducer from "./optionReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    options: optionReducer,
    products: productsReducer
})

export default rootReducer;