import React, { useState } from "react";
import "./myStyles.css";
import { reducerFunction1 } from "../Features/SliceA";
import { useDispatch } from "react-redux";
// Above is the action that can be dispatched

function Comp2() {
  const [textInput, setTextInput] = useState();
  console.log("state variable  : ", textInput);

  // "?The Reducer can update the Store by going in and Dispatching an Action"
  // Dispatch
  // Action

  const dispatch = useDispatch();

  return (
    <div className="comp2">
      <p>Comp2</p>
      <input
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(reducerFunction1(textInput));
        }}
      >
        Update Data
      </button>
    </div>
  );
}

export default Comp2;
