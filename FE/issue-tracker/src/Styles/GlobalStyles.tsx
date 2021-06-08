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
		cursor:default;
	}
	.App{
		width:1440px;
		height:960px;
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export default GlobalStyles;
