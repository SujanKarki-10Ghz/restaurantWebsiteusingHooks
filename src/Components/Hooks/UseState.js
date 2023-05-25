import React, { useState } from "react";
import "./styles.css";
const UseState = () => {
  const count = 0;
  const [myNum, setmyNum] = useState(count);

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
        <div
          className="button2"
          onClick={() => (myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
};

export default UseState;
