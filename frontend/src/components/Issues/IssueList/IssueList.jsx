import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import IssuesHeader from "./IssuesHeader";
import IssueCard from "./IssueCard";
import { issues } from "data";
// import { selectedIssueCntAtomState } from "MyRecoil/atom";
import { useRecoilState } from "recoil";
import { selectedIssueCntAtomState } from "RecoilStore/Atoms";
// import { useRecoilState } from "MyRecoil";

const IssueList = () => {
	const [isAnyIssueSelected, setIsAnyIssueSelected] = useState(false); // 상태 위치 협의 후 수정
	const [isAllIssueSelected, setIsAllIssueSelected] = useState(false);
	const [_, setSelectedIssues] = useRecoilState(selectedIssueCntAtomState);
	const [selectedCards, setSelectedCards] = useState(new Set());

	useEffect(() => {
		if (!isAllIssueSelected && !isAnyIssueSelected && !selectedCards.size)
			setSelectedIssues(() => 0);
	}, [isAnyIssueSelected]);

	const issueList = issues.map(issue => (
		<IssueCard
			key={issue.id}
			issue={issue}
			setIsAnyIssueSelected={setIsAnyIssueSelected}
			isAllIssueSelected={isAllIssueSelected}
			setIsAllIssueSelected={setIsAllIssueSelected}
			selectedCards={selectedCards}
			setSelectedCards={setSelectedCards}
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
				selectedCards={selectedCards}
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
