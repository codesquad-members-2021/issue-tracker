import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Noto Sans KR 
  }

  li {
    display: block;
    text-align: left;
  }
  ul{
    padding: 0;
    margin: 0.5rem 0;
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
  }

`;

export default GlobalStyle;
