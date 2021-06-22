import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { queryString, wholeIssueLists } from '@store/atoms/issueList';
import { pushState } from '@utils/query';

import { IssueSkeleton } from '@components/common/Skeleton';
import Issue from './Issue';
import ErrorIssueList from './ErrorIssueList';
import NoIssue from './NoIssue';

function IssueList() {
  const query = useRecoilValue(queryString);
  const { state, contents } = useRecoilValueLoadable(wholeIssueLists);

  const renderNoIssue = (contents: any): JSX.Element | undefined => {
    if (typeof contents === 'string' || contents.length === 0) {
      return <NoIssue isSearched={false} />;
    }
  };
  pushState(query);
  return (
    <>
      {state === 'hasError' && <ErrorIssueList>{contents}</ErrorIssueList>}
      {state === 'loading' && <IssueSkeleton />}
      {state === 'hasValue' &&
        contents.map((issueInfo: IssueInfo) => (
          <Issue key={issueInfo.id} info={issueInfo} />
        ))}
      {renderNoIssue(contents)}
    </>
  );
}

export default IssueList;

export type IssueInfo = {
  id: number;
  title: string;
  description: string;
  author: Author;
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

type Author = {
  user_id: number;
  name: string;
  avatar_url: string;
};
