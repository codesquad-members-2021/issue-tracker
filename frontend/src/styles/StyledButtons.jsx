import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Button from "@material-ui/core/Button";
import theme from "styles/theme";

export const TabButton = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: 13px;
	font-weight: bold;
	color: ${theme.grayScale.label};
	border: 1px solid ${theme.grayScale.label};
`;
export const AddButton = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: 13px;
	font-weight: bold;
	background-color: ${theme.colors.blue};
	color: ${theme.grayScale.off_white};
	border: 1px solid ${theme.grayScale.label};
	border-radius: 11px;
	&:hover {
		background-color: ${theme.colors.dark_blue};
	}
`;

export const StyledLoginButton = styled(Button)`
	width: 340px;
	height: 64px;
	font-size: ${theme.fontSizes.base};
	background-color: ${theme.grayScale.title_active};
	color: ${theme.grayScale.off_white};
	border-radius: ${theme.border_radius.base};
	&:hover {
		background-color: ${theme.grayScale.body};
	}
`;
