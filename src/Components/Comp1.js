import React from "react";
import Comp2 from "./Comp2";
import { useSelector } from "react-redux";

function Comp1() {
  const selectorDataA = useSelector((state) => {
    return state.SliceAReducer;
  });
  const selectorDataB = useSelector((state) => {
    return state.SliceBReducer;
  });

  // console.log("Selector Data : ", selectorDataA);
  return (
    <div>
      <p>Comp1 accessing SliceA : {selectorDataA.data}</p>
      <p>Comp1 accessing SliceB : {selectorDataB.data}</p>
      <Comp2 />
    </div>
  );
}

export default Comp1;
