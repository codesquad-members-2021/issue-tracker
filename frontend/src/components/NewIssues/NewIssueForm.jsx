import styled from "styled-components";
import NewIssueInput from "./NewIssueInput";
import IssueCategoryList from "components/common/IssueCategoryList";

const NewIssueForm = () => {
	return (
		<>
			<Wrapper>
				<NewIssueInput />
				<IssueCategoryList />
			</Wrapper>
			<ButtonWrapper>
				{/* 스타일 코드 작성시 이부분 button 컴포넌트 적용 필요 */}
				<button>x 작성 취소</button>
				<button>완료</button>
			</ButtonWrapper>
		</>
	);
};

export default NewIssueForm;

const Wrapper = styled.div`
	display: flex;
	padding: ${({ theme }) => `${theme.fontSizes.titleSize} 0`};
	border-bottom: 1px solid ${({ theme }) => theme.grayScale.line};
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: ${({ theme }) => `${theme.fontSizes.titleSize} 0`};
`;
