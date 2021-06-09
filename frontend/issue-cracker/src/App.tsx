import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/components/styles/theme';
import { GlobalStyle } from './components/styles/GlobalStyle';
import LogIn from './components/layout/LogIn';
import { BrowserRouter, Route } from 'react-router-dom';
import Callback from './components/Callback';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppStyle>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/callback" component={Callback} />
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;
