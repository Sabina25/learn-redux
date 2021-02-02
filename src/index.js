import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as actions from "./actions";
import reducer from "./reducer";
import App from "./components/app";

const store = createStore(reducer);
const { dispatch } = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
