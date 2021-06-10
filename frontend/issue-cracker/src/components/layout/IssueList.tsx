import React, { FC } from 'react';
import styled from 'styled-components';
import { SMALL_FILL, WRITING_ISSUE } from '../../utils/const';
import ButtonList from '../common/ButtonList';
import TabList from '../common/TabList';
import CustomizedSelects from '../common/FilterBar';

const IssueList: FC = () => {
  return (
    <IssueListDiv>
      <AddContainer>
        <SelectBox>
          <CustomizedSelects />
        </SelectBox>
        <AnotherBox>
          <TabBox>
            <TabList />
          </TabBox>
          <ButtonBox>
            <ButtonList type={SMALL_FILL} name={WRITING_ISSUE} />
          </ButtonBox>
        </AnotherBox>
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
  border: 1px solid red;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AnotherBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TabBox = styled.div`
  display: flex;
  height: 50px;
`;

const ButtonBox = styled.div`
  margin: 10px;
  padding-left: 10px;
`;
