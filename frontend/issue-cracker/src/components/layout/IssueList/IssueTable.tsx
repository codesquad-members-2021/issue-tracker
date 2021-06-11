import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../../common/ProgrerssBar';
import IssueLabelGroup from '../../common/IssueLabelGroup';
import InputList from '../../common/InputList';
import TextArea from '../../common/TextArea';
import ContainerHeader from '../../common/ContainerHeader';

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
      <InputList type="text" name="name" />
      <br />
      <br />
      <TextArea />
      <br />
      <br />
      <ContainerHeader />
    </IssueTableContainer>
  );
};

export default IssueTable;

const IssueTableContainer = styled.div``;
