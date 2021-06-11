import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/components/styles/theme';
import { GlobalStyle } from './components/styles/GlobalStyle';
import LogIn from './components/layout/LogIn';
import Callback from './components/Callback';
import Header from './components/layout/Header';
import IssueList from './components/layout/IssueList';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppStyle>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/callback" component={Callback} />
          <Route path="/main" component={Header} />
          <Route exact path="/main/issue-list" component={IssueList} />
          {/* <Route exact path="/iss ue-add" component={Header} /> */}
          {/* <Route exact path="/main/add" component={AddList} /> */}
        </AppStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
  // return (
  //   <Router>
  //     <Switch>
  //       <ThemeProvider theme={theme}>
  //         <GlobalStyle />
  //         <Route exact path="/" component={Home} />
  //         <Route
  //           //http://3.35.226.74/airbnb/?location=seoul&checkin=2021-05-28&checkout=2021-06-02&adults=2&children=1&infants=1

  //           path="/reservation/:location/:checkIn/:checkOut/:adults/:children/:infants/:minPrice/:maxPrice"
  //           component={Reservation}
  //         />
  //         <Route path="/callback" component={Callback} />
  //       </ThemeProvider>
  //     </Switch>
  //   </Router>
  // );
}

export default App;

const AppStyle = styled.div`
  margin: 0 80px;
`;
