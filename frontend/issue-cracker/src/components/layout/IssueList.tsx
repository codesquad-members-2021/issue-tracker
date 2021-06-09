import React, { FC } from 'react';
import styled from 'styled-components';
import { ADD, SMALL_FILL } from '../../utils/const';
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
          <ButtonList type={SMALL_FILL} name={ADD} />
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
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const TabBox = styled.div`
  display: flex;
`;

const ButtonBox = styled.div`
  margin: 10px;
`;
