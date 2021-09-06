import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputBar from "../InputBar";

let getByTestId;
beforeEach(() => {
	const component = render(<InputBar InputValue="initial value" />);
	getByTestId = component.getByTestId;
});

test("input value should be able to modify", () => {
	const inputEl = getByTestId("input");

	expect(inputEl.value).toBe("initial value");

	fireEvent.change(inputEl, {
		target: {
			value: "random value",
		},
	});
	expect(inputEl.value).toBe("random value");
});
