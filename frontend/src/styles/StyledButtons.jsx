import { useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const TabButton = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: 13px;
	font-weight: bold;
	color: ${({ theme }) => theme.grayScale.label};
	border: 1px solid ${({ theme }) => theme.grayScale.label};
`;
export const AddButton = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: 13px;
	font-weight: bold;
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.grayScale.off_white};
	border: 1px solid ${({ theme }) => theme.grayScale.label};
	border-radius: 11px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.dark_blue};
	}
`;

export const StyledLoginButton = styled(Button)`
	width: 340px;
	height: 64px;
	font-size: ${({ theme }) => theme.fontSizes.base};
	background-color: ${({ theme }) => theme.grayScale.title_active};
	color: ${({ theme }) => theme.grayScale.off_white};
	border-radius: ${({ theme }) => theme.border_radius.base};
	&:hover {
		background-color: ${({ theme }) => theme.grayScale.body};
	}
`;
