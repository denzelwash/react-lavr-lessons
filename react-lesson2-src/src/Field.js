import React, {useRef, useEffect } from "react"
import useClickOutside from "./hooks/useClickOutside";

export default function () {
  const elem = useRef()
  const outside = useClickOutside(elem)

  useEffect(() => {
		console.log(outside);
	}, [outside])

  return <div ref={elem}>
    <p>Приветик!</p>
  </div>
  
}