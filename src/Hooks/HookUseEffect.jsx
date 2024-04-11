import React, { useEffect, useState } from "react";

function HookUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 4) {
      document.title = count;
      console.log("Effect");
    }
  });

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h5 style={{ color: "#fff" }}>{count}</h5>
      <button onClick={handleClick} style={{ color: "#fff", padding: 10 }}>
        Click Me
      </button>
    </>
  );
}

export default HookUseEffect;
