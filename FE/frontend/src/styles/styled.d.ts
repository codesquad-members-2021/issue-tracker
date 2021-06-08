import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    greyscale: {
      [key: string]: string;
    };
    colors: {
      [key: string]: string;
    };
    alignCenter: string;
  }
}
