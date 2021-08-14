import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {

   const [SearchValue, SetSearchValue] = useState("");

   const HandleSearchValueChange = (event) => {
      SetSearchValue(event.target.value);
   };

   const ResetSearchValue = () => {
      SetSearchValue("");
   };

   let FilteredProducts = props.ProductList.filter((product) => {
      return product.includes(SearchValue);
   });

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
               return <li key={product}>{product}</li>;
            })}
         </ul>
      </div>
   );
};

export default SearchBar;
