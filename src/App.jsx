import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App--container">
        <Slider />
        <Info />
      </div>
    </div>
  );
}

export default App;
