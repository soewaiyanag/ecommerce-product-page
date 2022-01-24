import React from "react";
import "./LightBox.scss";
import Slider from "./Slider";

const LightBox = ({ viewWidth }) => {
  return (
    <div className="LightBox">
      <Slider viewWidth={viewWidth} />
    </div>
  );
};

export default LightBox;
