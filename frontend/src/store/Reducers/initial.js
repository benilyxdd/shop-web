import {
    FETCH_DATA,
    FILTER,
    SEARCH_VALUE_CHANGE,
    RESET_SEARCH,
    FILTER_TAG,
} from "../Actions/initial";

const initState = {
    products: [],
    filteredProducts: [],
    searchValue: "",
    tag: [],
};

const initialReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                products: action.data,
                filteredProducts: action.data,
            };
        case FILTER:
            return { ...state, filteredProducts: action.data };
        case SEARCH_VALUE_CHANGE:
            return { ...state, searchValue: action.data };
        case RESET_SEARCH:
            return {
                ...state,
                filteredProducts: state.products,
                searchValue: "",
            };
        case FILTER_TAG:
            return {
                ...state,
                tag: action.choice,
                filteredProducts: action.data,
            };
        default:
            return state;
    }
};

export default initialReducer;
