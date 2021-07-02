import { Divider } from '@material-ui/core';
import IssueDetailBody from 'components/issue-detail/IssueDetailBody';
import IssueDetailHeader from 'components/issue-detail/IssueDetailHeader';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  detailIssueAuthorIdAtom,
  issueDetailQuery,
} from 'stores/detailIssueStore';
import { clickedIssueIdAtom } from 'stores/issueStore';

import styled from 'styled-components';

const IssueDetailPage = () => {
  const location = useLocation();
  const [clickedIssue, setClickedIssue] = useRecoilState(clickedIssueIdAtom);
  if (!clickedIssue) {
    setClickedIssue(+location.pathname.split('/')[2]);
  }

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
