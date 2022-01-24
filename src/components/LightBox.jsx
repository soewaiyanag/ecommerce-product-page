import React from "react";
import "./LightBox.scss";
import Slider from "./Slider";
import close from "../images/icon-close.svg";

const LightBox = () => {
  return (
    <div className="LightBox">
      <Slider />
    </div>
  );
};

export default LightBox;
