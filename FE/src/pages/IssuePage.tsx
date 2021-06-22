import styled from 'styled-components';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import LoadingSpinner from '../components/Common/LoadingSpinner';
import IssueList from '../components/IssueList';
import { createGetRequestAddress } from '../util/API';
import useFetch from '../util/hooks/useFetch';
import { IIssuesInfo, ILabelsInfo, IMilestonesInfo, IUsersInfo } from '../util/types/api';
import { issuePageDataAtom } from 'util/store';


const IssuePage = () => {
  const [issuePageDataState, setIssuePageDataState] = useRecoilState(issuePageDataAtom);

  // useFecth는 Recoil: issuePageDataAtom의 모든 data 값들이 없어야 실행 가능하게 해야하나? (보류)
  // const checkBeforeFetchExecute = () => (Object.values(issuePageDataState.data).every((value) => !value));

  const { result: labelsResult, fetchState: { isLoading: labelsIsLoading } } = useFetch<ILabelsInfo>({ url: createGetRequestAddress('labels') });
  const { result: milestonesResult, fetchState: { isLoading: milestonesIsLoading } } = useFetch<IMilestonesInfo>({ url: createGetRequestAddress('milestones') });
  const { result: usersResult, fetchState: { isLoading: usersIsLoading } } = useFetch<IUsersInfo>({ url: createGetRequestAddress('users') });
  const { result: issuesResult, fetchState: { isLoading: issuesIsLoading } } = useFetch<IIssuesInfo>({ url: createGetRequestAddress('issues') });

  useEffect(() => {
    const arrLoading = [issuesIsLoading, milestonesIsLoading, labelsIsLoading, usersIsLoading];
    if (arrLoading.some((loading) => loading)) return;

    setIssuePageDataState({
      isLoading: false,
      data: {
        labels: labelsResult,
        milestones: milestonesResult,
        users: usersResult,
        issues: issuesResult,
      },
    });
  }, [issuesIsLoading, milestonesIsLoading, labelsIsLoading]);

  return !issuePageDataState.isLoading ? (
    <IssueList data={issuePageDataState.data} />
  ) : (
    <LoadingSpinner>
      <IssuePageLoadingText>로딩 중...🤪</IssuePageLoadingText>
    </LoadingSpinner>
  );
};

export default IssuePage;

// --- Styled Components ---
const IssuePageLoadingText = styled.p`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.grayScale.title};
`;
