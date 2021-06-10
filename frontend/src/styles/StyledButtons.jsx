import { useContext } from "react";
// import Button from "@material-ui/core/Button";
import styled, { ThemeContext } from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import theme from "styles/theme";
export const LoginButton = ({ children }) => {
	// const { grayScale, border_radius, fontSizes } = useContext(ThemeContext);

	return (
		<></>
		// <StyledLoginButton
		// 	variant="contained"
		// 	_fontSize={fontSizes.lg}
		// 	_bgColor={grayScale.title_active}
		// 	_color={grayScale.off_white}
		// 	_border_radius={border_radius.xl}
		// >
		// 	{children}
		// </StyledLoginButton>
	);
};
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

const StyledLoginButton = styled.button`
	width: 340px;
	height: 64px;
	font-size: ${props => props._fontSize};
	background-color: ${props => props._bgColor};
	color: ${props => props._color};
	border-radius: ${props => props._border_radius};
`;
