import styled from "styled-components";
import NewIssueForm from "components/NewIssues/NewIssueForm";

function NewIssue() {
	return (
		<>
			<Header>새로운 이슈 작성</Header>
			<NewIssueForm />
		</>
	);
}

export default NewIssue;

const Header = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.grayScale.line};
	padding: ${({ theme }) => `${theme.fontSizes.titleSize} 0px`};
	font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;
