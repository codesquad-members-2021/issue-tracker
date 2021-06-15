import React from 'react';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import Tabs from '../../../styles/molcules/Tabs';
import IssueTable from './IssueTable';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { Link } from 'react-router-dom';

const IssueMain = () => {
  return (
    <MainWrapper>
      <UpperIssueWrapper>
        <SearchFilter />
        <RightListWrapper>
          <Tabs />
          <Link style={{ textDecoration: 'none' }} to="newIssue">
            <Buttons initial small>
              <IconWrapper>
                <Plus />
              </IconWrapper>
              이슈 작성
            </Buttons>
          </Link>
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
`;

const IconWrapper = styled.div`
  padding-right: 5px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
  }
`;

const UpperIssueWrapper = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const RightListWrapper = styled.div`
  display: flex;
`;

const IssueTableWrapper = styled.div`
  padding: 12px 48px;
  min-width: 1024px;
`;
export default IssueMain;
