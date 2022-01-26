import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Info from "./components/Info";
import LightBox from "./components/LightBox";
import CartContextProvider from "./CartContext";

function App() {
  const [viewWidth, setViewWidth] = useState(0);
  const [isLightBoxActive, setIsLightBoxActive] = useState(false);

  const closeLightBox = () => {
    setIsLightBoxActive(false);
  };

  const activeLightBox = () => {
    setIsLightBoxActive(true);
  };

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
    <CartContextProvider>
      <div className="App">
        <Nav />
        <div className="App--container">
          <Slider viewWidth={viewWidth} activeLightBox={activeLightBox} />
          {viewWidth > 768 && isLightBoxActive ? (
            <LightBox viewWidth={viewWidth} closeLightBox={closeLightBox} />
          ) : null}
          <Info />
        </div>
      </div>
    </CartContextProvider>
  );
}

export default App;
