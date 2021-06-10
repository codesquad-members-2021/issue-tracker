import React, { FC } from 'react';
import styled from 'styled-components';
import { SMALL_FILL, WRITING_ISSUE } from '../../../utils/const';
import ButtonList from '../../common/ButtonList';
import TabList from '../../common/TabList';
import CustomizedSelects from '../../common/FilterBar';
import IssueNav from '../IssueList/IssueNav';
const IssueList: FC = () => {
  return (
    <IssueListDiv>
      <IssueNav />
    </IssueListDiv>
  );
};

export default IssueList;

const IssueListDiv = styled.div``;
