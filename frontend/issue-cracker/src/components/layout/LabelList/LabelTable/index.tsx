import React from 'react';
import styled from 'styled-components';
import LabelTableHeader from './LabelTableHeader';
import LabelCell from './LabelCell';

const LabelTable = (): JSX.Element => {
  return (
    <IssueTableContainer>
      <LabelTableHeader />
      <LabelCell />
    </IssueTableContainer>
  );
};

export default LabelTable;

const IssueTableContainer = styled.div``;
