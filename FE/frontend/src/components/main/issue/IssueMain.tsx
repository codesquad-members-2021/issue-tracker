import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Tabs from './Tabs';
import IssueTable from './IssueTable';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Plus } from '../../../icons/plus.svg';

const IssueMain = () => {
  return (
    <MainWrapper>
      <UpperIssueWrapper>
        <Filter />
        <RightListWrapper>
          <Tabs />
          <Buttons initial small>
            <IconWrapper>
              <Plus />
            </IconWrapper>
            이슈 작성
          </Buttons>
        </RightListWrapper>
      </UpperIssueWrapper>
      <IssueTableWrapper>
        <IssueTable />
      </IssueTableWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  div {
    max-width: 1280px;
  }
`;

const IconWrapper = styled.div`
  padding-right: 5px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
  }
`;

const UpperIssueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const RightListWrapper = styled.div`
  display: flex;
`;

const IssueTableWrapper = styled.div`
  padding: 12px 48px;
`;
export default IssueMain;
