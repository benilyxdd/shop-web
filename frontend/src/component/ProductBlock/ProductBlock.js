import React from "react";

import "./ProductBlock.css";

const ProductBlock = (props) => {
	const prop = props.Product;
	// console.log(prop);
	return (
		<div className="product-display">
			<img src={prop.image} alt="stone" />
			<h3>{prop.name}</h3>
			<h3>$ {prop.price}</h3>
		</div>
	);
};

export default ProductBlock;
