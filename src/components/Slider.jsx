import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import "./Slider.scss";

import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import close from "../images/icon-close.svg";

import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";

const productImgs = [product1, product2, product3, product4];

const Slider = ({ viewWidth }) => {
  const [index, setIndex] = useState(0);

  // FUNCTIONS
  const goPrevious = () => {
    setIndex(index - 1 === -1 ? 3 : index - 1);
  };
  const goNext = () => {
    setIndex((index + 1) % productImgs.length);
  };
  const closeLightBox = () => {};

  return (
    <div className="Slider">
      <span className="Slider__preview--icon previous" onClick={goPrevious}>
        <img src={previous} alt="previous" />
      </span>
      <span className="Slider__preview--icon next" onClick={goNext}>
        <img src={next} alt="next" />
      </span>

      <img className="close" src={close} alt="close" />

      <div className="Slider__preview--wrapper">
        <div className="Slider__preview">
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
        </div>
      </div>
      {viewWidth > 768 ? <Selector index={index} setIndex={setIndex} /> : null}
    </div>
  );
};

export default Slider;
