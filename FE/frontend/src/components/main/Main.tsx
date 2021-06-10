import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import IssueMain from './issue/IssueMain';

const Main = () => {
  return (
    <MainWrapper>
      <Header />
      <IssueMain />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
