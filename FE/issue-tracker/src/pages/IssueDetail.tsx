import styled from 'styled-components';

import Header from '@components/common/Header';
import IssueHeader from '@components/issueDetail/IssueHeader';
import IssueSidebar from '@components/issueDetail/IssueSidebar';
import CommentBox from '@components/issueDetail/CommentBox';

export type Param = {
  id: string;
};

function IssueDetail() {
  return (
    <IssueDetailPage>
      <Header />
      <IssueHeader />
      <IssueDetailContent>
        <CommentBox />
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
