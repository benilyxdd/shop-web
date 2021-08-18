import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import initial from "./component/store/Reducers/initial";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	initial: initial,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
