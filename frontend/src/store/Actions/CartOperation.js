export const CART_ADD = "CART_ADD";
export const CART_REMOVE = "CART_REMOVE";

export const cartAdd = (info) => {
    return { type: CART_ADD, data: info };
};
