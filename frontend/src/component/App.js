import React, { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProductBar from "./ProductBar/ProductBar";
import ProductDetail from './ProductDetail/ProductDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Router>
                <Switch>
                    <Route path = '/ProductDetail' component = {ProductDetail}>
                        <ProductDetail />
                    </Route>
                    <Route path='/' component={SearchBar}>
                        <SearchBar ProductList={products} />
                    </Route>
                </Switch>
            </Router>
		</div>
	);
};

export default App;
