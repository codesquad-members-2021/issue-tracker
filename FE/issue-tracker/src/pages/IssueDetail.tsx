import styled from 'styled-components';
import Header from '@components/common/Header';
import IssueHeader from '@components/issueDetail/IssueHeader';
import IssueSidebar from '@components/issueDetail/IssueSidebar';
import Comment from '@components/issueDetail/Comment';
import TextBox from '@components/issueDetail/TextBox';

function IssueDetail() {
  return (
    <IssueDetailPage>
      <Header />
      <IssueHeader />
      <IssueDetailContent>
        <IssueSidebar />
        <CommentBox>
          <Comment />
          <Comment />
          <TextBox />
        </CommentBox>
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
