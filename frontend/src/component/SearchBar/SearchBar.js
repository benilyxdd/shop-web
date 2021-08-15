import React, { useState } from "react";
import "./SearchBar.css";
import ProductBlock from '../ProductBlock/ProductBlock'

const SearchBar = (props) => {
    const [SearchValue, SetSearchValue] = useState("");

    const HandleSearchValueChange = (event) => {
        SetSearchValue(event.target.value);
    };

    const ResetSearchValue = () => {
        SetSearchValue("");
    };

    let FilteredProducts = props.ProductList.filter((product) => {
        const name = product.name
        return name.includes(SearchValue);
    });

    console.log(props.ProductList)

    return (
        <div>
            <input
                type="text"
                value={SearchValue}
                onChange={HandleSearchValueChange}
            />
            <button onClick={ResetSearchValue}>Clear</button>
            <ul>
                {FilteredProducts.map((product) => {
                    return <ProductBlock Product = {product}/>;
                })}
            </ul>
        </div>
    );
};

export default SearchBar;
