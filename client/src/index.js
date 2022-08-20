import React from "react";
import ReactDOM from "react-dom";

import "./Reset.css";
import App from "./App";
import { ContextProvider } from "./context/Context";

ReactDOM.render (
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.querySelector('#root')
);