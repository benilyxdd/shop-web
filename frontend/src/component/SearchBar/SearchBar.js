import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./SearchBar.css";
import ProductBlock from "../ProductBlock/ProductBlock";
import ProductBar from "../ProductBar/ProductBar";
import { cartAdd } from "../../store/Actions/CartOperation";

const SearchBar = (props) => {
    const dispatch = useDispatch();

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
                        <div>
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
