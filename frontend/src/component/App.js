import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from "./SearchBar/SearchBar";
import ProductBar from "./ProductBar/ProductBar";
import ProductDetail from './ProductDetail/ProductDetail'
import NavBar from './NavBar/NavBar'
import About from './About/About'
import './App.css'

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
		<div className = "App">
            <Router>
            <NavBar />
                <Switch>
                    <Route path = '/productDetail' component = {ProductDetail}>
                        <ProductDetail />
                    </Route>
                    <Route path='/about' component={SearchBar}>
                        <About />
                    </Route>
                    <Route path='/' component={SearchBar}>
			            <ProductBar />
                        <SearchBar ProductList={products} />
                    </Route>
                </Switch>
            </Router>
		</div>
	);
};

export default App;
