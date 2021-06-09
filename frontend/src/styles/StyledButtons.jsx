import { useContext } from "react";
// import Button from "@material-ui/core/Button";
import styled, { ThemeContext } from "styled-components";

export const BigBlueButton = ({ children }) => {
	const themeContext = useContext(ThemeContext);

	return (
		<Button variant="contained" _color={themeContext.colors.red}>
			{children}
		</Button>
	);
};

const Button = styled.button`
	background-color: ${props => props._color};
`;
