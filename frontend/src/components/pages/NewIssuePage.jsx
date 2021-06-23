import styled from "styled-components";
import NewIssueForm from "components/NewIssues/NewIssueForm";
import { IssueHeader } from "styles/StyledLayout";

function NewIssue() {
	return (
		<>
			<IssueHeader>새로운 이슈 작성</IssueHeader>
			<NewIssueForm />
		</>
	);
}

export default NewIssue;
