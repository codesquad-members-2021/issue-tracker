import React from 'react';
import styled from 'styled-components';

const IssueTable = () => {
  return (
    <TableWrapper>
      <IssueHeader>
        <CheckBox type="checkbox" name="checkAll"></CheckBox>
      </IssueHeader>
    </TableWrapper>
  );
};

const CheckBox = styled.input`
  width: 16px;
  height: 16px;
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
export default IssueTable;
