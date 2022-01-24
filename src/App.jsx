import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Info from "./components/Info";
import LightBox from "./components/LightBox";

function App() {
  const [viewWidth, setViewWidth] = useState(0);

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
        <Slider viewWidth={viewWidth} />
        {viewWidth > 768 ? <LightBox viewWidth={viewWidth} /> : null}
        <Info />
      </div>
    </div>
  );
}

export default App;
