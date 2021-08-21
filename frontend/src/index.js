import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./component/App";
import initial from "./store/Reducers/initial";
import CartOperation from "./store/Reducers/CartOperation";

const rootReducer = combineReducers({
    initial: initial,
    CartOperation: CartOperation,
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
