import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./SearchBar.css";
import ProductBlock from "../ProductBlock/ProductBlock";
import { cartAdd } from "../../store/Actions/CartOperation";
import { filter, searchValueChange, resetSearch , resetTag , filterTag } from "../../store/Actions/initial";

const SearchBar = (props) => {
    const dispatch = useDispatch();

    const products = props.data;
    const searchValue = useSelector((state) => state.initial.searchValue);
    const tagValue = useSelector((state) => state.initial.tag);
    const filteredProducts = useSelector(
        (state) => state.initial.filteredProducts
    );
    const resetAll = () => {
            dispatch(resetTag())
            dispatch(resetSearch())
        }
    return (
        <div>
            <div className="ProductList" onClick = {(e) => dispatch(filterTag(products, filteredProducts, tagValue, e.target.value))}>
                <button value="水晶手串">水晶手串</button>
                <button value="水晶簇">水晶簇</button>
                <button value="水晶球">水晶球</button>
                <button value="水晶柱">水晶柱</button>
                <button value="吊墜">吊墜</button>
                <button value="原石">原石</button>
            </div>
            <input
                type="text"
                value={searchValue}
                onChange={(event) => {
                    dispatch(searchValueChange(event.target.value));
                    dispatch(filter(products, searchValue));
                }}
            />
            <button onClick={() => resetAll()}>Clear</button>

            <div className="products-section">
                {filteredProducts.map((product, index) => {
                    return (
                        <div key={index} className="product-item">
                            <Link to={`/products/${product.id}`}>
                                <ProductBlock Product={product} />
                            </Link>
                            <button
                                onClick={() => {
                                    dispatch(cartAdd(product));
                                }}
                            >
                                Add
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchBar;
