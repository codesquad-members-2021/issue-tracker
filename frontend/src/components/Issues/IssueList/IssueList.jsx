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
			{issueList.length ? (
				issueList
			) : (
				<ErrorCard>검색과 일치하는 결과가 없습니다</ErrorCard>
			)}
		</StyledIssueList>
	);
};

export default IssueList;

const StyledIssueList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const ErrorCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.grayScale.off_white};
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	height: 100px;
`;
