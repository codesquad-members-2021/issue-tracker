import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import IssueHeader from "./IssuesHeader";
import IssueCard from "./IssueCard";
import { issues } from "data";

const IssueList = () => {
	const issueList = issues.map(issue => (
		<IssueCard key={issue.id} issue={issue} />
	));

	return (
		<StyledIssueList>
			<IssueHeader />
			{issueList}
		</StyledIssueList>
	);
};

export default IssueList;

const StyledIssueList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	/* border: ${props => `1px solid ${props._border}`};
	border-radius: ${props => props._border_radius}; */
`;
