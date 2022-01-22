import React, { useState } from "react";
import "./LightBox.scss";

import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product1_tumb from "../images/image-product-1-thumbnail.jpg";
import product2_tumb from "../images/image-product-2-thumbnail.jpg";
import product3_tumb from "../images/image-product-3-thumbnail.jpg";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

const products = [product1, product2, product3];
const products_tumb = [product1_tumb, product2_tumb, product3_tumb];

const LightBox = () => {
  const [index, setIndex] = useState(0);

  // FUNCTIONS
  const goPrevious = () => {
    setIndex(index - 1 === -1 ? 2 : index - 1);
  };
  const goNext = () => {
    setIndex((index + 1) % 3);
  };

  return (
    <div className="LightBox">
      <div className="LightBox__preview">
        <span className="LightBox__preview--icon previous" onClick={goPrevious}>
          <img src={previous} alt="previous" />
        </span>
        <img
          className="LightBox__preview--img"
          src={products[index]}
          alt="preview"
        />
        <span className="LightBox__preview--icon next" onClick={goNext}>
          <img src={next} alt="next" />
        </span>
      </div>
    </div>
  );
};

export default LightBox;
