import styled from 'styled-components';
import Header from '@components/common/Header';
import IssueHeader from '@components/issueDetail/IssueHeader';
import IssueSidebar from '@components/issueDetail/IssueSidebar';
import Comment from '@components/issueDetail/Comment';
import NewComment from '@components/issueDetail/NewComment';

function IssueDetail() {
  return (
    <IssueDetailPage>
      <Header />
      <IssueHeader />
      <IssueDetailContent>
        <CommentBox>
          <Comment />
          <Comment />
          <NewComment />
        </CommentBox>
        <IssueSidebar />
      </IssueDetailContent>
    </IssueDetailPage>
  );
}

export default IssueDetail;

const IssueDetailPage = styled.div`
  ${({ theme }) => theme.page}
`;

const IssueDetailContent = styled.div`
  display: flex;
  margin-top: 32px;
`;
const CommentBox = styled.div``;
