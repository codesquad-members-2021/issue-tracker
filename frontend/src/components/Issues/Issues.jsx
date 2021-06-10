import styled from "styled-components";
import IssueList from "./IssueList/IssueList";

const Issues = () => {
	return (
		<StyledIssues>
			<IssueList />
		</StyledIssues>
	);
};

export default Issues;

const StyledIssues = styled.div`
	display: flex;
	width: 100%;
`;
