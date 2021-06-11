import React, { FC } from 'react';
import styled from 'styled-components';
import { SMALL_FILL, WRITING_ISSUE } from '../../../utils/const';
import ButtonList from '../../common/ButtonList';
import TabList from '../../common/TabList';
import FilterBar from '../../common/FilterBar';
import ButtonGroup from '../../common/ButtonGroup';

const IssueNav: FC = () => {
  return (
    <IssueNavDiv>
      <IssueNavContainer>
        <SelectBox>
          <FilterBar />
        </SelectBox>
        <AnotherBox>
          <TabBox>
            <TabList />
            <ButtonGroup />
          </TabBox>
          <ButtonBox>
            <ButtonList type={SMALL_FILL} name={WRITING_ISSUE} />
          </ButtonBox>
        </AnotherBox>
      </IssueNavContainer>
    </IssueNavDiv>
  );
};

export default IssueNav;

const IssueNavDiv = styled.div``;

const IssueNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding-left: 10px;
  display: flex;
  align-items: flex-end;
`;
