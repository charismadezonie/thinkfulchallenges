import React, { useState } from "react";

function CountButton () {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1)
  
  return (
    <button onClick={handleClick}>Click Count: {count}</button>
  )
}

export default CountButton;