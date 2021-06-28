import React, { useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../../../util/useFetch';
import ListFilters from './ListFilters';
import Issues from './Issues';
import Typo from '../../../styles/atoms/Typos';
import CheckBox from '../../../styles/atoms/CheckBox';
import { ReactComponent as AlertCircle } from '../../../icons/alertCircle.svg';
import { ReactComponent as Archive } from '../../../icons/archive.svg';
import { useRecoilState } from 'recoil';
import { filterAtom } from '../../../recoil/atoms';

const IssueTable = () => {
  const [filter, setFilter] = useRecoilState<any>(filterAtom);
  const { isLoading, data, error, refetch } = useFetch(
    'issue',
    'filter',
    filter
  );
  const { data: count } = useFetch('issue', 'count');

  useEffect(() => {
    refetch();
  }, [filter]);

  const showOpenIssue = async () => {
    setFilter({ ...filter, isOpen: true });
  };

  const showClosedIssue = async () => {
    setFilter({ ...filter, isOpen: false });
  };

  return (
    <>
      <IssueHeader>
        <LeftHeaderContainer>
          <CheckBox />
          <Text link sm onClick={showOpenIssue}>
            <AlertCircle />
            열린 이슈({count?.open_issues})
          </Text>
          <Text link sm onClick={showClosedIssue}>
            <Archive />
            닫힌 이슈({count?.closed_issues})
          </Text>
        </LeftHeaderContainer>
        <ListFilters />
      </IssueHeader>
      <TableContainer>{data && <Issues data={data} />}</TableContainer>
    </>
  );
};

const IssueHeader = styled.div`
  height: 64px;
  background: ${props => props.theme.greyscale.background};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const LeftHeaderContainer = styled.div`
  padding: 0 1px;
  & > div {
    padding: 0 10px;
  }
  svg {
    stroke: ${props => props.theme.greyscale.titleActive};
  }
`;

const Text = styled(Typo)`
  svg {
    margin: 2px 6px 0 6px;
  }
`;

const TableContainer = styled.div`
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

export default IssueTable;
