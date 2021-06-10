import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Theme from './style/Theme';
import App from './App';
import { ThemeProvider } from 'styled-components';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
