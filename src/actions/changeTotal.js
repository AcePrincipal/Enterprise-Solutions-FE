import optionReducer from "../reducers/optionReducer"

export const changeTotal = (selection) => dispatch => {
    optionReducer(selection)
}