import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

const render = () => {
  return ReactDOM.render(
    <BrowserRouter basename="/ecommerce-product-page">
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
