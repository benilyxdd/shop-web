import { CART_ADD, CART_REMOVE } from "../Actions/CartOperation";

const initState = {
    cartList: [],
    // userToken: "",
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case CART_ADD:
            return { ...state, cartList: [...state.cartList, action.data] };
        case CART_REMOVE:
            return {
                ...state,
                cartList: state.cartList.filter((item) => {
                    return item.id !== action.data.id;
                }),
            };
        default:
            return state;
    }
};

export default cartReducer;
