import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
	${reset};
	a{
		text-decoration : none;
		color:inherit;
		cursor:pointer;
	}
	*{
		box-sizing:border-box;
	}
	body{
		font-size : 14px;
		font-family: Noto Sans KR;
		color : #333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.App{
	}
`;

export default GlobalStyles;
