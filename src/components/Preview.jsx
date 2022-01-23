import React, { useState } from "react";
import "./Preview.scss";

const Preview = ({ productImgs }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="Preview">
      <img
        className="Preview--img"
        src={productImgs[index]}
        alt="preview img"
      />
      <div className="Preview__selector">
        {productImgs.map((img, i) => (
          <img
            className="Preview__selector--img"
            src={img}
            alt="img"
            key={"preview" + i}
          />
        ))}
      </div>
    </div>
  );
};

export default Preview;
