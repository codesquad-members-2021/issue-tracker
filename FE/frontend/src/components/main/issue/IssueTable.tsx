import React from 'react';
import styled from 'styled-components';
import Typo from '../../../styles/atoms/Typos';
import { ReactComponent as AlertCircle } from '../../../icons/alertCircle.svg';
import { ReactComponent as Archive } from '../../../icons/archive.svg';

const IssueTable = () => {
  return (
    <TableWrapper>
      <IssueHeader>
        <LeftHeaderWrapper>
          <CheckBox type="checkbox" name="checkAll"></CheckBox>
          <Typo link sm>
            <AlertCircle />
            열린 이슈
          </Typo>
          <Typo link sm>
            <Archive />
            닫힌 이슈
          </Typo>
        </LeftHeaderWrapper>
      </IssueHeader>
    </TableWrapper>
  );
};

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  background: ${props => props.theme.greyscale.offWhite};

  border: 1px solid #d9dbe9;
  box-sizing: border-box;
  border-radius: 2px;
`;

const TableWrapper = styled.div``;

const IssueHeader = styled.div`
  height: 64px;
  background: ${props => props.theme.greyscale.background};
  border: 1px solid #d9dbe9;
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
`;

const LeftHeaderWrapper = styled.div`
  display: flex;
`;
export default IssueTable;
