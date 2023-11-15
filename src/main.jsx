import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NewsProvider } from "./Context/Reducer/Newscontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>
);
