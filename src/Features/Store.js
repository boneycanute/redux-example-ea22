import { configureStore } from "@reduxjs/toolkit";
import ReducerA from "./SliceA";
import ReducerB from "./SliceB";

export const store = configureStore({
  reducer: {
    // All Reducer of the store will be specified here
    SliceAReducer: ReducerA,
    SliceBReducer: ReducerB,
  },
});
