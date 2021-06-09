import "styled-components";

declare module "styled-components" {
  type TFontFamily = 'normal' | 'logo';
  type TFontSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'LOGO';
  type TGrayScale =
    | "offWhite" | "bgColor" | "inputBgColor"
    | "line" | "placeHolder" | "label"
    | "body" | "title";
  type TNormalColors =
    | "blue" | "lightBlue" | "darkBlue"
    | "purple" | "lightPurple" | "darkPurple"
    | "red" | "lightRed" | "darkRed"
    | "green" | "lightGreen" | "darkGreen";

  export interface DefaultTheme {
    fontFamily: {
      [name in TFontFamily]: string;
    };
    fontWeight: {
      [name: string]: string;
    };
    fontSize: {
      [sizeName in TFontSize]: string;
    }
    colors: {
      grayScale: {
        [color in TGrayScale]: string;
      };
      normal: {
        [color in TNormalColors]: string;
      };
    };
  }
}
