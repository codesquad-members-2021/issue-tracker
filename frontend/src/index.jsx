import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { StylesProvider } from "@material-ui/core/styles";
import { RecoilRoot } from "recoil";

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<StylesProvider injectFirst>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</StylesProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
