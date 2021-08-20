import React from "react";

import "./ProductBar.css";

// 水晶手串
// 水晶簇
// 水晶球
// 水晶柱
// 吊墜
// 原石

const ProductBar = () => {
    const handleClick = (e) => {
        console.log(e.target.value);
    };

    return (
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
    );
};

export default ProductBar;
