import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Noto Sans KR;
  }

  li {
    display: block;
    text-align: left;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  button{
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border: none;
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  body {
    padding: 0 80px;
    background-color: #F7F7FC;
  }
`;

export default GlobalStyle;
