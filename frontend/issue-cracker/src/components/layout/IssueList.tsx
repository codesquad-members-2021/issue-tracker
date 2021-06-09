import React, { FC } from 'react';
import styled from 'styled-components';
import { SMALL_FILL, WRITING_ISSUE } from '../../utils/const';
import ButtonList from '../common/ButtonList';
import TabList from '../common/TabList';

const IssueList: FC = () => {
  return (
    <IssueListDiv>
      <AddContainer>
        <TabBox>
          <TabList />
        </TabBox>
        <ButtonBox>
          <ButtonList type={SMALL_FILL} name={WRITING_ISSUE} />
        </ButtonBox>
      </AddContainer>
    </IssueListDiv>
  );
};

export default IssueList;

const IssueListDiv = styled.div``;

const AddContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
`;

const TabBox = styled.div`
  display: flex;
`;

const ButtonBox = styled.div`
  margin: 10px;
  padding-left: 10px;
`;
