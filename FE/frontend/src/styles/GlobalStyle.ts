import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        font-family:'Noto Sans KR', sans-serif, Roboto,'Helvetica Neue';
        font-size: 14px;
    }
`;

export default GlobalStyles;
