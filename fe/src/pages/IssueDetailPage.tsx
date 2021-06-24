import { Divider } from '@material-ui/core';
import IssueDetailBody from 'components/issue-detail/IssueDetailBody';
import IssueDetailHeader from 'components/issue-detail/IssueDetailHeader';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { detailIssueAuthorIdAtom, issueDetailQuery } from 'store';
import styled from 'styled-components';

const IssueDetailPage = () => {
  const {
    author: { user_id },
  } = useRecoilValue(issueDetailQuery);
  const setDetailIssueAuthorIdAtom = useSetRecoilState(detailIssueAuthorIdAtom);

  setDetailIssueAuthorIdAtom(user_id);

  return (
    <>
      <IssueDetailHeader />
      <Spacer />
      <Divider />
      <Spacer />
      <IssueDetailBody />
    </>
  );
};

const Spacer = styled.div`
  height: 2rem;
`;

export default IssueDetailPage;
