import { FETCH_DATA, FILTER, SEARCH_VALUE_CHANGE } from "../Actions/initial";

const initState = {
    products: [],
    filteredProducts: [],
    searchValue: "",
};

const initialReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, products: action.data, filteredProducts: action.data };
        case FILTER:
            return { ...state, filteredProducts: action.data };
        case SEARCH_VALUE_CHANGE:
            return { ...state, searchValue: action.data };
        default:
            return state;
    }
};

export default initialReducer;
