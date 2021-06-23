import styled from "styled-components";
import { ImgWrapper } from "styles/StyledLayout";

const IssueDetailCommentCard = ({ data }) => {
	return (
		<Wrapper>
			<ImgWrapper></ImgWrapper>
			<CardWrapper>
				<CardHeader>
					<div>
						<span>작성자</span>
						<span>n분 전</span>
					</div>
					<div>
						<span>작성자라벨</span>
						<span>편집버튼</span>
						<span>😀</span>
					</div>
				</CardHeader>
				<CardBody>처음부터 전부 구현하려고 하지 마</CardBody>
			</CardWrapper>
		</Wrapper>
	);
};

export default IssueDetailCommentCard;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSizes.base};
`;

const CardWrapper = styled.div`
	width: 100%;
`;

const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 64px;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	background-color: ${({ theme }) => theme.grayScale.background};
	border-radius: 16px 16px 0 0;
	padding: 1rem;
`;

const CardBody = styled.div`
	background-color: ${({ theme }) => theme.grayScale.off_white};
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: 0 0 16px 16px;
	padding: 1rem;
`;
