import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
