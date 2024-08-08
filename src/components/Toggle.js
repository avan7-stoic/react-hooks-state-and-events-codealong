import React, { useState } from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(false);
    function handleClick() {
      setIsOn((isOn) => !isOn);
    }
    <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
  return <button>OFF</button>;
}

export default Toggle;
