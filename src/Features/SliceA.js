import { createSlice } from "@reduxjs/toolkit";

const SliceA = createSlice({
  name: "SliceA",
  initialState: { data: "Data present SliceA" },
  reducers: {
    reducerFunction1: (state, action) => {
      console.log(
        "I am reducerFunction1 , which can be performed by the reducer of SliceA"
      );
      state.data = action.payload;
      console.log("Action : ", action);
    },
    reducerFunction2: (state, action) => {
      console.log(
        "I am reducerFunction2 , which can be performed by the reducer of SliceA"
      );
    },
  },
});

// To create a Reducer , use the "reducer" property of the Slice
const ReducerA = SliceA.reducer;
export default ReducerA;

// Action are auto-generated with the same name as the Reducer Functions
export const { reducerFunction1, reducerFunction2 } = SliceA.actions;
