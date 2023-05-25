import React, { useState, useEffect } from "react";
import "./styles.css";
const UseEffect = () => {
  //Using useEffect (side effects) , you tell react that your component needs to do something after the render.
  // It runs after every render and after every update.
  //UseEffect performs similar as React lifecycle components: ComponentDidMount(), ComponentDidUpdate(), ComponentWillUnmount().
  const count = 0;
  const [myNum, setmyNum] = useState(count);
  useEffect(() => {
    document.title = `Chats(${myNum})`;
  }, [myNum]);
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setmyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
      </div>
    </>
  );
};

export default UseEffect;
