import styled from "styled-components";
import CommentInput from "components/common/CommentInput";
import IssueDetailCommentCard from "components/IssueDetail/IssueDetailCommentCard";

const IssueDetailComments = () => {
	return (
		<Wrapper>
			<IssueDetailCommentCard />
			<IssueDetailCommentCard />
			<CommentInput isNewIssueMode={false} />
		</Wrapper>
	);
};

export default IssueDetailComments;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	margin-top: 2rem;
`;
