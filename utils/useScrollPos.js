import { useState, useEffect } from "react";

const useScrollPos = () => {
  const [pos, setPos] = useState({ scroll:0 });

  const handleMove = () => {
    setPos({ scroll: window.pageYOffset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMove);
    return () => {
      window.removeEventListener("scroll", handleMove);
    };
  }, []);

  return pos;
};

export default useScrollPos;
