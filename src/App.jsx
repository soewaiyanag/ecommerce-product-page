import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Info from "./components/Info";

import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import Preview from "./components/Preview";

function App() {
  const productImgs = [product1, product2, product3, product4];
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const updateViewWidth = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    updateViewWidth();
    window.addEventListener("resize", updateViewWidth);
    return () => {
      window.removeEventListener("resize", updateViewWidth);
    };
  }, [viewWidth]);

  return (
    <div className="App">
      <Nav />
      <div className="App--container">
        {viewWidth < 768 ? (
          <Slider productImgs={productImgs} />
        ) : (
          <Preview productImgs={productImgs} />
        )}
        <Info />
      </div>
    </div>
  );
}

export default App;
