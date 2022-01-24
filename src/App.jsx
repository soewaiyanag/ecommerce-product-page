import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Info from "./components/Info";
import LightBox from "./components/LightBox";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App--container">
        <Slider />
        <LightBox />
        <Info />
      </div>
    </div>
  );
}

export default App;
