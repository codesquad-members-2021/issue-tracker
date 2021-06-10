import { useContext } from "react";
// import Button from "@material-ui/core/Button";
import styled, { ThemeContext } from "styled-components";

export const LoginButton = ({ children }) => {
	const { grayScale, border_radius, fontSizes } = useContext(ThemeContext);

	return (
		<Button
			variant="contained"
			_fontSize={fontSizes.lg}
			_bgColor={grayScale.title_active}
			_color={grayScale.off_white}
			_border_radius={border_radius.xl}
		>
			{children}
		</Button>
	);
};

const Button = styled.button`
	width: 340px;
	height: 64px;
	font-size: ${props => props._fontSize};
	background-color: ${props => props._bgColor};
	color: ${props => props._color};
	border-radius: ${props => props._border_radius};
`;
