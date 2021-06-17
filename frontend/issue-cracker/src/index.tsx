import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StylesProvider } from '@material-ui/core/styles';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
