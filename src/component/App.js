import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ProductDetail from "./ProductDetail/ProductDetail";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import { fetchData } from "../store/Actions/initial";
import Footer from '../component/Footer/Footer'

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
                <Route path="/" exact>
                    <SearchBar data={products} />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
