import React, { useState } from "react";
import useMousePos from "../utils/useMousePos";
import useScrollPos from "../utils/useScrollPos";

export default function DopeText({ children, image }) {
  const { x, y } = useMousePos();
  const [dims, setDims] = useState({});
  const {scroll} = useScrollPos();
  const getDimensions = (e) => {
    setDims({ height: e.target.naturalHeight, width: e.target.naturalWidth });
  };

  return (
    <div className="dope-wrapper">
      <span className="dope-text">{children}</span>
      <div
        className="dope-image"
        style={{
          transform: `translate(${x - Math.min(dims.width, 200) / 2}px, ${
            y-(Math.min(dims.height, 200) / 2) + scroll}px)`,
        }}
      >
        <img onLoad={(e) => getDimensions(e)} src={image} alt="lolololol" />
      </div>
    </div>
  );
}
