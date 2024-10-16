import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<Toaster  position="top-right" // You can set the position of the toast
        reverseOrder={false}
        margin-top="2rem"
        />
<App />
</BrowserRouter>


);
