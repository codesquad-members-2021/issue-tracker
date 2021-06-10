import styled from "styled-components";
import IssueList from "./IssueList/IssueList";
import Menu from "./Menu/Menu";
const Issues = () => {
	return (
		<StyledIssues>
			<Menu></Menu>
			<IssueList />
		</StyledIssues>
	);
};

const StyledIssues = styled.div`
	display: flex;
	width: 100%;
`;

export default Issues;
