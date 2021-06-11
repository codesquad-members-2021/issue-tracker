import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../../common/ProgrerssBar';
import IssueLabelGroup from '../../common/IssueLabelGroup';
import InputGroup from '../../common/InputGroup';
import TextArea from '../../common/TextArea';
import IssueTableHeader from './IssueTableHeader';
import IssueCell from './IssueCell';

const IssueTable = (): JSX.Element => {
  return (
    <IssueTableContainer>
      <ProgressBar />
      <br />
      <IssueLabelGroup type={'open'} />
      <br />
      <br />
      <IssueLabelGroup type={'closed'} />
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
