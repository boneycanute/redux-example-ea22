import React from "react";
import Comp1 from "./Components/Comp1";
import { Provider } from "react-redux";
import { store } from "./Features/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        App
        <Comp1 />
      </div>
    </Provider>
  );
}

export default App;
