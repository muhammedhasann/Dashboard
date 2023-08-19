import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import { Provider } from "react-redux";
/* import { api } from "state/api";
 */
const store = configureStore({
  reducer: {
    global: globalReducer,
  },
/*   middleware: (getDefault) => getDefault().concat(api.middleware),
 */});
/* setupListeners(store.dispatch);
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);