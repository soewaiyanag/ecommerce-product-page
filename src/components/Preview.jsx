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
          <div
            style={{
              outlineWidth: index === i ? "initial" : null,
            }}
            className="Preview__selector--div"
            key={"selector" + i}
            onClick={() => {
              setIndex(i);
            }}
          >
            <img
              style={{
                opacity: index === i ? ".5" : null,
              }}
              className="Preview__selector--img"
              src={img}
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
