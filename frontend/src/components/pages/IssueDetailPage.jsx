import styled from "styled-components";
import IssueDetailHeader from "components/IssueDetail/IssueDatailHeader";
import IssueDetailComments from "components/IssueDetail/IssueDetailComments";

const IssueDetailPage = () => {
	return (
		<IssueWrapper>
			<IssueDetailHeader />
			<ContentsWrapper>
				<IssueDetailComments />
				<div>카테고리 리스트 넣어주셈요~~</div>
			</ContentsWrapper>
		</IssueWrapper>
	);
};

export default IssueDetailPage;

const IssueWrapper = styled.div``;
const ContentsWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
`;
