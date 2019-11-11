import React from "react";
import ReactDOM from "react-dom";

import MiniDrawer from "./drawer.js";
import TransitionsSnackbar from "./snackbar.js";

const rootElement = document.getElementById("flame");
ReactDOM.render(<MiniDrawer />, rootElement);

const alartElement = document.getElementById("alart");
ReactDOM.render(<TransitionsSnackbar />, alartElement);
