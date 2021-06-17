import { Divider } from '@material-ui/core';
import IssueDetailBody from 'components/issue-detail/IssueDetailBody';
import IssueDetailHeader from 'components/issue-detail/IssueDetailHeader';
import styled from 'styled-components';

const IssueDetailPage = () => (
  <>
    <IssueDetailHeader />
    <Spacer />
    <Divider />
    <Spacer />
    <IssueDetailBody />
  </>
);

const Spacer = styled.div`
  height: 2rem;
`;

export default IssueDetailPage;
