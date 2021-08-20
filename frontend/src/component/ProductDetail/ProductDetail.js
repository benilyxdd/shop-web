import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { cartAdd } from "../../store/Actions/CartOperation";

import "./ProductDetail.css";

const ProductDetail = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const selectedProduct = useSelector((state) => state.initial.products)[
        id - 1
    ];

    console.log(selectedProduct)

    const handleAdd = () => {
        dispatch(cartAdd(selectedProduct));
    };

    return (
        <div>
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.image} alt="stone" />
            <h2>$ {selectedProduct.price}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default ProductDetail;
