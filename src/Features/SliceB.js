import { createSlice } from "@reduxjs/toolkit";

const SliceB = createSlice({
  name: "SliceB",
  initialState: {
    data: "Data present SliceB",
    numberData: 123,
    booleanData: true,
  },
  reducers: {
    reducerFunction1: () => {
      console.log(
        "I am reducerFunction1 , which can be performed by the reducer of SliceB"
      );
    },
    reducerFunction2: () => {
      console.log(
        "I am reducerFunction2 , which can be performed by the reducer of SliceB"
      );
    },
  },
});

// To create a Reducer , use the "reducer" property of the Slice
const ReducerB = SliceB.reducer;
export default ReducerB;

// Action are auto-generated with the same name as the Reducer Functions
export const { reducerFunction1, reducerFunction2 } = SliceB.actions;
