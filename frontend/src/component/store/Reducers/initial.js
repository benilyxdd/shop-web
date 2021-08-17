import { FETCH_DATA } from "../Actions/initial";

const empty = {
    products: [],
    cart: [],
};

const initalize = (state = empty, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, products: action.data };
        default:
            return state;
    }
};

export default initalize;
