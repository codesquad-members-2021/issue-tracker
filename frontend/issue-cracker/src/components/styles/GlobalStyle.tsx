import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding:0; 
    margin:0;
    box-sizing:border-box;
  }
  body{
    font-family: 'Noto Sans KR';
    
  }
  a{
    text-decoration:none;
  }
  ol, ul, li {
    list-style: none;
  }
  button{
    border:none;
  }
`;
