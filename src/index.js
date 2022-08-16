import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";
// import { sessionrkt } from "./app/Session/session.api";
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={sessionrkt}> */}
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals(); // TODO
