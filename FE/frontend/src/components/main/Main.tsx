import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import IssueMain from './issue/IssueMain';
import NewIssue from './issue/NewIssue';
import IssueDetail from './issue/IssueDetail';
import LabelList from './label/LabelList';
import MilstoneList from './milestone/MilestoneList';

const Main = () => {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/main" component={IssueMain} />
          <Route path="/newIssue" component={NewIssue} />
          <Route path="/labelList" component={LabelList} />
          <Route path="/milestoneList" component={MilstoneList} />
          <Route path="/issues/:id" component={IssueDetail} />
        </Switch>
      </BrowserRouter>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
