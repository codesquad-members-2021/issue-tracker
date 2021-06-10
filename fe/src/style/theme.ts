import 'styled-components';

interface DefaultTheme {
  fontFamily: string;
  fontWeight: {
    [key: string]: string;
  };
  color: {
    [key: string]:
      | string
      | {
          [key: string]: string;
        };
  };
  fontSize: {
    [key: string]: string;
  };
  border: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

const theme: DefaultTheme = {
  fontFamily: 'Noto Sans KR',
  fontWeight: {
    normal: '400',
    bold: '700',
    bold2: '900',
  },
  color: {
    grayscale: {
      titleActive: '#14142B',
      body: '#4E4B66',
      label: '#6E7191',
      line: '#D9DBE9',
      inputBG: '#EFF0F6',
      default: '#F7F7FC',
      background: '#F7F7FC',
      offWhite: '#FEFEFE',
    },
    blue: '#007AFF',
    lightBlue: '#C7EBFF',
    red: '#FF3B30',
    purple: '#0025E7',
    lightPurple: '#CCD4FF',
  },
  fontSize: {
    XXL: '2rem', // 32px
    XL: '1.5rem', //  24px
    L: '1.1rem', //18px
    M: '1rem', // 16px
    S: '0.75rem', //12px
  },

  border: {
    radius: {
      XL: '2rem', // 30px
      L: '1.25rem', // 20px
      M: '1rem', // 16px
      S: '0.7rem', // 11px
    },
  },
};

export { theme };
