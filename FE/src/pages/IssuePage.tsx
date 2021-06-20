import styled from 'styled-components';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import IssueList from '../components/IssueList';
import { createGetRequestAddress } from '../util/API';
import useFetch from '../util/hooks/useFetch';
import {
  IIssuesInfo,
  ILabelsInfo,
  IMilestonesInfo,
  IIssuesPageData,
} from '../util/types/api';

interface IDataState {
  isLoading: boolean;
  data: IIssuesPageData;
}

const IssuePage = () => {
  const {
    result: issuesResult,
    fetchState: { isLoading: issuesIsLoading },
  } = useFetch<IIssuesInfo>(createGetRequestAddress('issues'));

  const {
    result: milestonesResult,
    fetchState: { isLoading: milestonesIsLoading },
  } = useFetch<IMilestonesInfo>(createGetRequestAddress('milestones'));

  const {
    result: labelsResult,
    fetchState: { isLoading: labelsIsLoading },
  } = useFetch<ILabelsInfo>(createGetRequestAddress('labels'));

  const initDataState = {
    isLoading: true,
    data: { issues: undefined, milestones: undefined, labels: undefined },
  };
  const [dataState, setDataState] = useState<IDataState>(initDataState);
  useEffect(() => {
    const arrLoading = [issuesIsLoading, milestonesIsLoading, labelsIsLoading];
    if (arrLoading.some((loading) => loading)) return;
    setDataState((dataState) => ({
      ...dataState,
      isLoading: false,
      data: {
        issues: issuesResult,
        milestones: milestonesResult,
        labels: labelsResult,
      },
    }));
  }, [issuesIsLoading, milestonesIsLoading, labelsIsLoading]);

  return !dataState.isLoading ? (
    <IssueList data={dataState.data} />
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
