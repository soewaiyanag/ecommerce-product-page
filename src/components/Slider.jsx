import React, { useState, useRef, useEffect } from "react";
import "./Slider.scss";

import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

const Slider = ({ productImgs }) => {
  const [index, setIndex] = useState(0);

  // FUNCTIONS
  const goPrevious = () => {
    setIndex(index - 1 === -1 ? 2 : index - 1);
  };
  const goNext = () => {
    setIndex((index + 1) % productImgs.length);
  };

  return (
    <div className="Slider">
      <div className="Slider__preview">
        <span className="Slider__preview--icon previous" onClick={goPrevious}>
          <img src={previous} alt="previous" />
        </span>
        <div
          style={{
            transform: `translateX(${-100 * index}%)`,
          }}
          className="Slider__preview--imgs"
        >
          {productImgs.map((img, index) => {
            return (
              <img
                key={"slider" + index}
                className="Slider__preview--img"
                src={img}
                alt="preview-img"
              />
            );
          })}
        </div>
        <span className="Slider__preview--icon next" onClick={goNext}>
          <img src={next} alt="next" />
        </span>
      </div>
    </div>
  );
};

export default Slider;
