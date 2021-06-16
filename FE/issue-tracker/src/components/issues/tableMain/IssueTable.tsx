import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValueLoadable } from 'recoil';

import { wholeIssueLists } from '@store/atoms/issueList';

import { IssueSkeleton } from '@components/common/Skeleton';
import TableHeader from '../tableHeader/TableHeader';
import Issue from './Issue';
import NoIssue from './NoIssue';
import ErrorIssueList from './ErrorIssueList';

function IssueTable() {
  const [isClosed, setIsClosed] = useState(false);
  const { state, contents } = useRecoilValueLoadable(wholeIssueLists(isClosed));

  const handleClickTab = (e: React.MouseEvent): void => {
    const target = e.target as HTMLLIElement;
    const targetState = target.dataset.state;
    if (targetState === 'open') setIsClosed(false);
    if (targetState === 'close') setIsClosed(true);
  };

  const renderNoIssue = (contents: any) => {
    if (typeof contents === 'string' || contents.length === 0) {
      return <NoIssue isSearched={false} />;
    }
  };

  return (
    <IssueTableWrap>
      <TableHeader isClosed={isClosed} handleClickTab={handleClickTab} />
      {state === 'hasError' && <ErrorIssueList>{contents}</ErrorIssueList>}
      {state === 'loading' && <IssueSkeleton />}
      {state === 'hasValue' &&
        contents.map((issueInfo: IssueInfo) => (
          <Issue key={issueInfo.id} info={issueInfo} />
        ))}
      {renderNoIssue(contents)}
    </IssueTableWrap>
  );
}

export default IssueTable;

export type IssueInfo = {
  id: number;
  title: string;
  description: string;
  author_avatar_url: string;
  label_list: Label[];
  issue_number: number;
  created_time: string;
  milestone_title: string;
};

type Label = {
  id: number;
  title: string;
  color_code: string;
};

const IssueTableWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
