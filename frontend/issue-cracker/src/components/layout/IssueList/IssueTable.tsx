import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../../common/ProgrerssBar';
import LabelLargeGroup from '../../common/LabelLargeGroup';
import InputGroup from '../../common/InputGroup';
import TextArea from '../../common/TextArea';
import IssueTableHeader from './IssueTableHeader';
import IssueCell from './IssueCell';

const IssueTable = (): JSX.Element => {
  return (
    <IssueTableContainer>
      <ProgressBar />
      <br />

      <LabelLargeGroup type={'open'} />

      <br />
      <br />
      <LabelLargeGroup type={'closed'} />
      <br />
      <br />
      <InputGroup type="text" name="name" />
      <br />
      <br />
      <TextArea />
      <br />
      <br />
      <IssueTableHeader />
      <IssueCell />
    </IssueTableContainer>
  );
};

export default IssueTable;

const IssueTableContainer = styled.div``;
