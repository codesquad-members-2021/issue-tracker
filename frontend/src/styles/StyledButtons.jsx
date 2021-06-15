import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const TabButton = styled(Button)`
	width: ${props => props._width};
	height: ${({ theme }) => theme.buttonHeights.base};
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: bold;
	color: ${({ theme }) => theme.grayScale.label};
	border: 1px solid
		${props => (props._border === "none" ? "none" : props.theme.grayScale.line)};
	border-radius: ${props =>
		props._radius === "right"
			? props.theme.border_radius_mix.right
			: props._radius === "left"
			? props.theme.border_radius_mix.left
			: props.theme.border_radius_mix.all};
	background-color: ${({ theme }) =>
		theme.grayScale.background}; //str넣었는데 str넣으라고 오류뜸
`;

export const ButtonGroupRightBtn = styled(TabButton)`
	border-radius: ${({ theme }) => theme.border_radius_mix.right};
	width: ${({ theme }) => theme.buttonWidths.base};
`;

export const ButtonGroupLeftBtn = styled(TabButton)`
	border-radius: ${({ theme }) => theme.border_radius_mix.left};
`;

export const AddBtn = styled(Button)`
	width: 160px;
	height: ${({ theme }) => theme.buttonHeights.base};
	font-size: ${({ theme }) => theme.fontSizes.xs};
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
	height: ${({ theme }) => theme.buttonHeights.lg};
	font-size: ${({ theme }) => theme.fontSizes.base};
	background-color: ${({ theme }) => theme.grayScale.title_active};
	color: ${({ theme }) => theme.grayScale.off_white};
	border-radius: ${({ theme }) => theme.border_radius.base};
	&:hover {
		background-color: ${({ theme }) => theme.grayScale.body};
	}
`;
