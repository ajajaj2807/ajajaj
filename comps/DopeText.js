import React, { useState } from "react";
import useMousePos from "../utils/useMousePos";
import useScrollPos from "../utils/useScrollPos";

export default function DopeText({ children, image }) {
  const { x, y } = useMousePos();
  const { scroll } = useScrollPos();

  return (
    <div className="dope-wrapper">
      <span className="dope-text">{children}</span>
      <div
        className="dope-image"
        style={{
          transform: `translate(${x - 10}px, ${y - 30 + scroll}px)`,
        }}
      >
        <img src={image} alt="lolololol" />
      </div>
    </div>
  );
}
