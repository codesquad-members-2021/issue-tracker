import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import IssuesHeader from "./IssuesHeader";
import IssueCard from "./IssueCard";
import { issues } from "data";
import { selectedIssueCntAtomState } from "MyRecoil/atom";
import { useRecoilState } from "MyRecoil/useRecoilState";

const IssueList = () => {
	const [isAnyIssueSelected, setIsAnyIssueSelected] = useState(false); // 상태 위치 협의 후 수정
	const [isAllIssueSelected, setIsAllIssueSelected] = useState(false);
	const [initCheck, setInitCheck] = useState(true);
	const [selectedIssues, setSelectedIssues] = useRecoilState(
		selectedIssueCntAtomState
	);
	useEffect(() => {
		if (!initCheck && !isAllIssueSelected && !isAnyIssueSelected)
			setSelectedIssues(() => 0);
	}, [isAnyIssueSelected]);

	const issueList = issues.map(issue => (
		<IssueCard
			key={issue.id}
			issue={issue}
			setIsAnyIssueSelected={setIsAnyIssueSelected}
			isAllIssueSelected={isAllIssueSelected}
			setIsAllIssueSelected={setIsAllIssueSelected}
			initCheck={initCheck}
			setInitCheck={setInitCheck}
		/>
	));

	return (
		<StyledIssueList>
			<IssuesHeader
				issuesCnt={issues.length}
				isAnyIssueSelected={isAnyIssueSelected}
				setIsAnyIssueSelected={setIsAnyIssueSelected}
				isAllIssueSelected={isAllIssueSelected}
				setIsAllIssueSelected={setIsAllIssueSelected}
				initCheck={initCheck}
				setInitCheck={setInitCheck}
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
