import styled from "styled-components";
import IssueDetailHeader from "components/IssueDetail/IssueDetailHeader";
import IssueDetailComments from "components/IssueDetail/IssueDetailComments";
import IssueCategoryList from "components/common/IssueCategory/IssueCategoryList";

const IssueDetailPage = () => {
	return (
		<IssueWrapper>
			<IssueDetailHeader />
			<ContentsWrapper>
				<IssueDetailComments />
				<IssueCategoryList />
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
