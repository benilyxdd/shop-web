import React, { useState } from "react";

import "./InputBar.css";

const InputBar = (props) => {
    const [inputValue, setInputValue] = useState(props.InputValue);

    const HandleInputValueChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={HandleInputValueChange}
            />
        </div>
    );
};

export default InputBar;
