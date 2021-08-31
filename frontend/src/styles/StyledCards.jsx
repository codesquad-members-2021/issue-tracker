import styled from "styled-components";
import { getGridRateStyle } from "util/getGridRateStyle";

export const StyledGridTitleCard = styled.div`
	display: grid;
	align-items: center;
	height: 64px;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: ${({ theme }) => theme.border_radius.lg}
		${({ theme }) => theme.border_radius.lg} 0px 0px;
	grid-template-columns: ${props => getGridRateStyle(props.gridRate)};
`;

export const StyledGridCard = styled.div`
	display: grid;
	grid-template-columns: ${props => getGridRateStyle(props.gridRate)};
	background-color: ${({ theme }) => theme.grayScale.off_white};
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	height: 100px;
`;

export const StyledFlexCard = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.grayScale.off_white};
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	height: 100px;
`;
