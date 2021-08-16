import React, { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProductBar from "./ProductBar/ProductBar";

const App = () => {
	const [products, setProducts] = React.useState([]);

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
		setProducts(products);
	};

	useEffect(() => fetchData(), []);
	return (
		<div>
			<ProductBar />
			<SearchBar ProductList={products} />
		</div>
	);
};

export default App;
