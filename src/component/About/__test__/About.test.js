import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import About from "../About";

let getByTestId;
beforeEach(() => {
	const component = render(<About />);
	getByTestId = component.getByTestId;
});

test("about should contains description", () => {
	const description = getByTestId("description");
	expect(description.textContent).toMatch(/\w+/);
});
