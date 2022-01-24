import React from "react";
import "./Selector.scss";

import product1_tumb from "../images/image-product-1-thumbnail.jpg";
import product2_tumb from "../images/image-product-2-thumbnail.jpg";
import product3_tumb from "../images/image-product-3-thumbnail.jpg";
import product4_tumb from "../images/image-product-4-thumbnail.jpg";

const productTumbs = [
  product1_tumb,
  product2_tumb,
  product3_tumb,
  product4_tumb,
];

const Selector = ({ index, setIndex }) => {
  return (
    <div className="Selector">
      {productTumbs.map((img, i) => (
        <div
          style={{
            outlineWidth: index === i ? "initial" : null,
          }}
          className="Selector--div"
          key={"selector" + i}
          onClick={() => {
            setIndex(i);
          }}
        >
          <img
            style={{
              opacity: index === i ? "0.5" : null,
            }}
            className="Selector--img"
            src={img}
            alt="img"
          />
        </div>
      ))}
    </div>
  );
};

export default Selector;
