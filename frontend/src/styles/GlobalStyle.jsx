import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #ffffff;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  ol,ul,li {
    list-style:none;
  }
  button {
    cursor: pointer;
    outline: none; 
    border: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyle;
