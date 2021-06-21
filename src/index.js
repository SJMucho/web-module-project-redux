import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/movieReducer";

import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const store = createStore(reducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
