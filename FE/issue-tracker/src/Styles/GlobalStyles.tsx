import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "@/Styles/theme";

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
		background: ${theme.GRAY_SCALE.BACKGROUND};
	}
	.App{
		width:1280px;
		border:1px solid blue;
		height:500px;
	}
`;

export default GlobalStyles;
