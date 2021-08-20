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
    
    const handleClick = (e) => {
        
    };

    // console.log(props.ProductList);

    return (
        <div>
            <div
                className="ProductList"
                onClick={(e) => {
                    handleClick(e);
                }}
            >
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
