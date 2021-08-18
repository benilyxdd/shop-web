import React from "react";
import { useParams } from "react-router-dom";

import "./ProductDetail.css";

const ProductDetail = (props) => {
	const { id } = useParams();

	return (
		<div>
			<h1>ProductDetail {id}</h1>
		</div>
	);
};

export default ProductDetail;
