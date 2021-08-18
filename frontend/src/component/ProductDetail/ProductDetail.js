import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
	const { id } = useParams();

	return (
		<div>
			<h1>ProductDetail {id}</h1>
		</div>
	);
};

export default ProductDetail;
