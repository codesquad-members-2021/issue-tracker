import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  greyscale: {
    titleActive: '#14142B',
    body: '#4E4B66',
    label: '#6E7191',
    placeholer: '#A0A3BD',
    line: '#D9DBE9',
    inputBackground: '#EFF0F6',
    background: '#F7F7FC',
    offWhite: '#FEFEFE',
  },
  colors: {
    primary: '#007AFF',
    lightBlue: '#C7EBFF',
    darkBlue: '#004DE3',
    secondary: '#0025E7',
    lightPurple: '#CCD4FF',
    darkPurple: '#020070',
    error: '#FF3B30',
    lightRed: '#FFD1CF',
    darkRed: '#C60B00',
    success: '#34C759',
    lightGreen: '#DDFFE6',
    darkGreen: '#00A028',
  },
  fontSize: {
    lg: '24px',
    md: '18px',
    sm: '16px',
    xs: '12px',
  },
  alignCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default theme;
