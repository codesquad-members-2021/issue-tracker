import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
