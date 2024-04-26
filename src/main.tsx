import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import GlobalStyles from "./app/styles/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
