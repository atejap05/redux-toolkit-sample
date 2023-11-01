import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import App from "./App.jsx";
import "./index.css";

// Redux Toolkit imports
import { Provider as ReduxProvider } from "react-redux";
import store from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
