import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StylesProvider } from '@material-ui/core/styles';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
