import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fontFamily: {
    normal: 'Noto Sans KR',
    logo: 'Montserrat',
  },
  fontWeight: {
    normal: '400',
    middle: '500',
    bold: '700',
  },
  fontSize: {
    XS: "12px",
    S: "16px",
    M: "18px",
    L: "24px",
    XL: "32px",
    LOGO: "56px",
  },
  colors: {
    grayScale: {
      offWhite: '#FEFEFE',
      bgColor: '#F7F7FC',
      inputBgColor: '#EFF0F6',
      line: '#D9DBE9',
      placeHolder: '#A0A3BD',
      label: '#6E7191',
      body: '#4E4B66',
      title: '#14142B',
    },
    normal: {
      blue: '#007AFF',
      lightBlue: '#C7EBFF',
      darkBlue: '#004DE3',
      purple: '#0025E7',
      lightPurple: '#CCD4FF',
      darkPurple: '#020070',
      red: '#FF3B30',
      lightRed: '#FFD1CF',
      darkRed: '#C60B00',
      green: '#34C759',
      lightGreen: '#DDFFE6',
      darkGreen: '#00A028',
    },
  },
};

export default theme;
