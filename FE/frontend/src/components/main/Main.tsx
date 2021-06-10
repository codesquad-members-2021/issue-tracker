import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import IssueList from './issue/IssueList';

const Main = () => {
  return (
    <MainWrapper>
      <Header />
      <IssueList />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
