import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import IssueMain from './issue/IssueMain';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddIssue from './issue/AddIssue';
import useFetch from '../../util/useFetch';

const Main = () => {
  // const { isLoading, data, error } = useFetch('issue', 'getAllData');
  useEffect(() => {
    // console.log(data);
  }, []);

  return (
    <MainWrapper>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/main" component={IssueMain} />
          <Route path="/newIssue" component={AddIssue} />
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
