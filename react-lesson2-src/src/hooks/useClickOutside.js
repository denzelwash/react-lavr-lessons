import React, {useState, useEffect } from "react";

export default function(element) {
  const [inside, setInside] = useState(null);

  useEffect(() => {
    function handleClick(e) {
      const insideFlag = (e.path.findIndex((elem) => elem === element.current) > -1)
      setInside(insideFlag)
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  });

  return inside;
}