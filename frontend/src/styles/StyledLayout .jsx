import styled from "styled-components";

//컴포넌트 명 수정 예정
export const DisplayFlex = styled.div`
	display: flex;
`;
export const CenterJcAi = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CenterAi = styled.div`
	display: flex;
	align-items: center;
`;

export const IssueHeader = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.grayScale.line};
	padding: ${({ theme }) => `${theme.fontSizes.titleSize} 0px`};
	font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;
