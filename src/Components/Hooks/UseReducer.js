import React, { useReducer } from "react";
import "./styles.css";
const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DCR") {
    state = state - 1;
  }
  return state;
};
const UseReducer = () => {
  //For small task UseState and for big task useReducer()
  // const [currentState, dispatchMethod] = useReducer(reducer, initiaData);
  //initial data will be currentState value.
  //dispatch is used to trigger reducer function.
  // updated_function will be inside reducer function unlike useState().
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div className="button2" onClick={() => dispatch({ type: "DCR" })}>
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

export default UseReducer;
