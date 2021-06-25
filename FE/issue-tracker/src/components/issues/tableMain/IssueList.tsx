import { useEffect } from 'react';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import {
  formerDataKey,
  queryString,
  wholeIssueLists,
} from '@store/atoms/issueList';

import { IssueSkeleton } from '@components/common/Skeleton';
import Issue from './Issue';
import ErrorIssueList from './ErrorIssueList';
import NoIssue from './NoIssue';

function IssueList() {
  const query = useRecoilValue(queryString);
  const { state, contents } = useRecoilValueLoadable(wholeIssueLists);
  const setReRenderKeyUpdate = useSetRecoilState(formerDataKey);
  const renderNoIssue = (contents: any): JSX.Element | undefined => {
    if (typeof contents === 'string' || contents.length === 0) {
      return <NoIssue isSearched={false} />;
    }
  };

  useEffect(() => {
    const currentQuery = window.location.search;
    if (`?${query}` === currentQuery) return;

    window.history.pushState({ query }, query, `?${query}`);
    setReRenderKeyUpdate((num) => num + 1);
  }, [query, setReRenderKeyUpdate]);

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
  author: Person;
  assignees: Person[];
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

type Person = {
  user_id: number;
  name: string;
  avatar_url: string;
};
function setReRenderKeyUpdat(arg0: (num: any) => any) {
  throw new Error('Function not implemented.');
}
