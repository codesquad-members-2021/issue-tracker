import React from 'react';
import styled from 'styled-components';
interface Props {
  headerChildren: React.FC;
  tableChildren: React.FC;
}

const Table = (props: Props) => {
  console.log(props.headerChildren);
  return (
    <>
      <IssueHeader>{props.headerChildren}</IssueHeader>
      <TableWrapper>{props.headerChildren}</TableWrapper>
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

const TableWrapper = styled.div`
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

export default Table;
