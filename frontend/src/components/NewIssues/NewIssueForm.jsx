import styled from "styled-components";
import NewIssueInput from "./NewIssueInput";
import IssueCategoryList from "components/common/IssueCategoryList";
import SubmitButton from "components/common/Button/SubmitButton";
import CancelButton from "components/common/Button/CancelButton";

const NewIssueForm = () => {
	return (
		<>
			<Wrapper>
				<NewIssueInput />
				<IssueCategoryList />
			</Wrapper>
			<ButtonWrapper>
				<CancelButton>x 작성 취소</CancelButton>
				<SubmitButton>완료</SubmitButton>
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
