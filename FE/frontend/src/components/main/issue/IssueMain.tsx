import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import IssueTable from './IssueTable';
import Tabs from '../../../styles/molcules/Tabs';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Plus } from '../../../icons/plus.svg';

const IssueMain = () => {
  return (
    <MainContainer>
      <UpperIssueContainer>
        <SearchFilter />
        <RightListContainer>
          <Tabs />
          <Link style={{ textDecoration: 'none' }} to="newIssue">
            <Buttons initial small>
              <IconWrapper>
                <Plus />
              </IconWrapper>
              이슈 작성
            </Buttons>
          </Link>
        </RightListContainer>
      </UpperIssueContainer>
      <IssueTableContainer>
        <IssueTable />
      </IssueTableContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const IconWrapper = styled.div`
  padding-right: 5px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
  }
`;

const UpperIssueContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const RightListContainer = styled.div`
  display: flex;
`;

const IssueTableContainer = styled.div`
  padding: 12px 48px;
  min-width: 1024px;
`;
export default IssueMain;
