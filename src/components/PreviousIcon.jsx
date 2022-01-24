import React from "react";
import "./Icon.scss";

const PreviousIcon = () => {
  return (
    <svg
      className="Icon Previous"
      width="12"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="Icon--path"
        d="M11 1 3 9l8 8"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default PreviousIcon;
