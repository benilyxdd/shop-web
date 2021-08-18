import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ProductDetail.css";

const ProductDetail = (props) => {
	const { id } = useParams();
	const selectedProduct = useSelector((state) => state.initial.products)[
		id - 1
	];

	return (
		<div>
			<h1>{selectedProduct.name}</h1>
			<img src={selectedProduct.image} alt="stone" />
			<h2>$ {selectedProduct.price}</h2>
		</div>
	);
};

export default ProductDetail;
