import { useContext, useState } from "react";
import styled from "styled-components";
import IssuesHeader from "./IssuesHeader";
import IssueCard from "./IssueCard";
import { issues } from "data";

const IssueList = () => {
	const issueList = issues.map((issue) => <IssueCard key={issue.id} issue={issue} />);
	// const [isIssueSelected, setIsIssueSelected] = useState(false); // 상태 위치 협의 후 수정
	// const [isAllIssueSelected, setIsAllIssueSelected] = useState(false);
	return (
		<StyledIssueList>
			<IssuesHeader />
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
