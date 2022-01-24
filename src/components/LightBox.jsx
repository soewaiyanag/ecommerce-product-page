import React from "react";
import "./LightBox.scss";
import Slider from "./Slider";

const LightBox = ({ viewWidth, closeLightBox }) => {
  return (
    <div className="LightBox">
      <Slider viewWidth={viewWidth} closeLightBox={closeLightBox} />
    </div>
  );
};

export default LightBox;
