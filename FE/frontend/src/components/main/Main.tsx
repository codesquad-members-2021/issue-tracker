import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import IssueMain from './issue/IssueMain';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddIssue from './issue/AddIssue';
import LabelList from './label/LabelList';
import MilstoneList from './milestone/MilestoneList';
import IssueDetail from './issue/IssueDetail';

const Main = () => {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/main" component={IssueMain} />
          <Route path="/newIssue" component={AddIssue} />
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
