import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SearchBar.css";
import ProductBlock from "../ProductBlock/ProductBlock";
import ProductBar from "../ProductBar/ProductBar";

const SearchBar = (props) => {
	const [searchValue, setSearchValue] = useState("");

	const HandleSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	const ResetSearchValue = () => {
		setSearchValue("");
	};

	let FilteredProducts = props.ProductList.filter((product) => {
		const name = product.name;
		return name.includes(searchValue);
	});

	// console.log(props.ProductList);

	return (
		<div>
			<ProductBar />
			<input
				type="text"
				value={searchValue}
				onChange={HandleSearchValueChange}
			/>
			<button onClick={ResetSearchValue}>Clear</button>
			<div className="products-section">
				{FilteredProducts.map((product) => {
					return (
						<Link to={`/products/${product.id}`}>
							<ProductBlock Product={product} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default SearchBar;
