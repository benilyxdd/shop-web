import React, { useState } from "react";
import "./InputBar.css";

const InputBar = (props) => {
	const [InputValue, SetInputValue] = useState(props.InputValue);

	const HandleInputValueChange = (event) => {
		SetInputValue(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={InputValue}
				onChange={HandleInputValueChange}
			/>
		</div>
	);
};

export default InputBar;
