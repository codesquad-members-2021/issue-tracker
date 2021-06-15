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
        background-color: #F7F7FC;
    }
    input, textarea {
        border: 0;
    }
`;

export default GlobalStyles;
