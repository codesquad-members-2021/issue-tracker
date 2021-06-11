import styled from "styled-components";
import Button from "@material-ui/core/Button";
import theme from "styles/theme";

export const TabButton = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: ${theme.fontSizes.xs};
	font-weight: bold;
	color: ${theme.grayScale.label};
	border: 1px solid ${theme.grayScale.line};
	border-radius: 11px 0 0 11px;
	background-color: ${theme.grayScale.background};
`;
export const ButtonGroupRightBtn = styled(TabButton)`
	border-radius: ${theme.border_radius_mix.right};
`;
export const ButtonGroupLeftBtn = styled(TabButton)`
	border-radius: ${theme.border_radius_mix.left};
`;
export const AddBtn = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: ${theme.fontSizes.xs};
	font-weight: bold;
	background-color: ${theme.colors.blue};
	color: ${theme.grayScale.off_white};
	border: 1px solid ${theme.grayScale.label};
	border-radius: ${theme.border_radius.base};
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
