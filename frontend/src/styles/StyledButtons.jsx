import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const TabButton = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: ${({theme}) => theme.fontSizes.xs};
	font-weight: bold;
	color: ${({ theme }) => theme.grayScale.label};
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: 11px 0 0 11px;
  background-color: ${({theme}) => theme.grayScale.background};
`;

export const ButtonGroupRightBtn = styled(TabButton)`
	border-radius: ${({theme}) => theme.border_radius_mix.right};

`;

export const ButtonGroupLeftBtn = styled(TabButton)`
	border-radius: ${({theme}) => theme.border_radius_mix.left};
`;

export const AddBtn = styled(Button)`
	width: 160px;
	height: 40px;
	font-size: ${({theme}) => theme.fontSizes.xs};
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
