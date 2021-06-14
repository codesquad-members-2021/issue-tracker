import { useContext, useState } from "react";
import styled from "styled-components";
import IssuesHeader from "./IssuesHeader";
import IssueCard from "./IssueCard";
import { issues } from "data";

const IssueList = () => {
	const [isAnyIssueSelected, setIsAnyIssueSelected] = useState(false); // 상태 위치 협의 후 수정
	const [isAllIssueSelected, setIsAllIssueSelected] = useState(false);
	const [selectedIssues, setSelectedIssues] = useState([]);

	const issueList = issues.map(issue => (
		<IssueCard
			key={issue.id}
			issue={issue}
			isAnyIssueSelected={isAnyIssueSelected}
			setIsAnyIssueSelected={setIsAnyIssueSelected}
			isAllIssueSelected={isAllIssueSelected}
			setIsAllIssueSelected={setIsAllIssueSelected}
		/>
	));

	return (
		<StyledIssueList>
			<IssuesHeader
				isAnyIssueSelected={isAnyIssueSelected}
				setIsAnyIssueSelected={setIsAnyIssueSelected}
				isAllIssueSelected={isAllIssueSelected}
				setIsAllIssueSelected={setIsAllIssueSelected}
			/>
			{issueList}
		</StyledIssueList>
	);
};

export default IssueList;

const StyledIssueList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
