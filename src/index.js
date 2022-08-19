import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";
// import { sessionrkt } from ".//Session/sessionApi";
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={sessionrkt}> */}
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(); // TODO utility?