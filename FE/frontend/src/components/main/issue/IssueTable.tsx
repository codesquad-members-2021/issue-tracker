import React from 'react';
import styled from 'styled-components';
import Typo from '../../../styles/atoms/Typos';
import CheckBox from '../../../styles/atoms/CheckBox';
import { ReactComponent as AlertCircle } from '../../../icons/alertCircle.svg';
import { ReactComponent as Archive } from '../../../icons/archive.svg';
import ListFilters from './ListFilters';

const IssueTable = () => {
  return (
    <TableWrapper>
      <IssueHeader>
        <LeftHeaderWrapper>
          <CheckBox />
          <Text link sm>
            <AlertCircle />
            열린 이슈
          </Text>
          <Text link sm>
            <Archive />
            닫힌 이슈
          </Text>
        </LeftHeaderWrapper>
        <ListFilters />
      </IssueHeader>
      <IssueCell>
        <CheckBox />
        <AlertCircle />
      </IssueCell>
    </TableWrapper>
  );
};

const TableWrapper = styled.div``;

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

const LeftHeaderWrapper = styled.div`
  padding: 0 24px;
  div {
    padding: 0 18px;
  }
`;

const IssueCell = styled.div`
  height: 100px;
  background: ${props => props.theme.greyscale.offWhite};
  margin: 1px 0px;
`;

const Text = styled(Typo)`
  svg {
    margin: 2px 6px 0 6px;
  }
`;

export default IssueTable;
