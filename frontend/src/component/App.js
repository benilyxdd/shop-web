import React, { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProductBlock from "./ProductBlock/ProductBlock";

const App = () => {
	const [Products, SetProducts] = React.useState([]);

	const fetchData = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const responseData = await response.json();
		const products = await responseData.map((product) => {
			const item = {
				name: product.title,
				price: product.price,
				image: product.image,
			};
			return item;
		});
		SetProducts(products);
	};

	useEffect(() => fetchData(), []);
	return (
		<div>
			<SearchBar ProductList={Products} />
		</div>
	);
};

export default App;
