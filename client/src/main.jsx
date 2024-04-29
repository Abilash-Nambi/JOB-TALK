import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
