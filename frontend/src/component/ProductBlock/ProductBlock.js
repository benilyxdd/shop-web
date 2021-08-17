import React from "react";
import "./ProductBlock.css";

const ProductBlock = (props) => {
	const prop = props.Product;
	const Image = () => {
		return <img src={prop.image} alt="stone"></img>;
	};
	const Name = () => {
		return <h3>{prop.name}</h3>;
	};
	const Price = () => {
		return <h3>$ {prop.price}</h3>;
	};
	// console.log(prop);
	return (
		<div className="product-display">
			<Image />
			<Name />
			<Price />
		</div>
	);
};

export default ProductBlock;
