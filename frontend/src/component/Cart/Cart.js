import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Cart.css";
import ProductBlock from "../ProductBlock/ProductBlock";
import { cartRemove } from "../../store/Actions/CartOperation";

const Cart = () => {
    const dispatch = useDispatch();

    const cartList = useSelector((state) => state.CartOperation.cartList);

    return (
        <div>
            <h6>Favourite:</h6>
            {cartList.map((product) => {
                return (
                    <div>
                        <Link to={`/products/${product.id}`}>
                            <ProductBlock Product={product} />
                        </Link>
                        <button
                            onClick={() => {
                                dispatch(cartRemove(product));
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
