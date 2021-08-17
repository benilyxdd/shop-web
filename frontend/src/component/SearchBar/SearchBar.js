import React, { useState } from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import ProductBar from "../ProductBar/ProductBar";
import { Link } from "react-router-dom";
import "./SearchBar.css";

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
            <ul>
                {FilteredProducts.map((product) => {
                    return (
                        <Link to={`/products/${product.id}`}>
                            <ProductBlock Product={product} />
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default SearchBar;
