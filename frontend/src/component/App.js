import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import ProductDetail from "./ProductDetail/ProductDetail";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../store/Actions/initial";

const App = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.initial.products);

	useEffect(() => {
		dispatch(fetchData());
	}, []);
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/products/:id" render={() => <ProductDetail />} />
				<Route path="/about" component={About} />
				<Route path="/">
					<SearchBar ProductList={products} />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
