import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { StylesProvider } from "@material-ui/core/styles";

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<StylesProvider injectFirst>
			<App />
		</StylesProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
