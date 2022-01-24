import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import "./Slider.scss";

import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";
import CloseIcon from "./CloseIcon";

const productImgs = [product1, product2, product3, product4];

const Slider = ({ viewWidth, activeLightBox, closeLightBox }) => {
  const [index, setIndex] = useState(0);

  // FUNCTIONS
  const goPrevious = () => {
    setIndex(index - 1 === -1 ? productImgs.length - 1 : index - 1);
  };
  const goNext = () => {
    setIndex((index + 1) % productImgs.length);
  };

  return (
    <div className="Slider">
      <span className="Slider__preview--icon previous" onClick={goPrevious}>
        <PreviousIcon />
      </span>

      <span className="Slider__preview--icon next" onClick={goNext}>
        <NextIcon />
      </span>

      <span className="close" onClick={closeLightBox}>
        <CloseIcon />
      </span>

      <div className="Slider__preview--wrapper">
        <div className="Slider__preview">
          <div
            style={{
              transform: `translateX(${-100 * index}%)`,
            }}
            className="Slider__preview--imgs"
            onClick={() => {
              // optional event // doesn't run when function is undefined
              activeLightBox && activeLightBox();
            }}
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
