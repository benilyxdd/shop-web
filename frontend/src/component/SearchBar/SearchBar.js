import React, { useState } from "react";
import "./SearchBar.css";
import ProductBlock from "../ProductBlock/ProductBlock";

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

	console.log(props.ProductList);

	return (
		<div>
			<input
				type="text"
				value={searchValue}
				onChange={HandleSearchValueChange}
			/>
			<button onClick={ResetSearchValue}>Clear</button>
			<ul>
				{FilteredProducts.map((product) => {
					return <ProductBlock Product={product} />;
				})}
			</ul>
		</div>
	);
};

export default SearchBar;
