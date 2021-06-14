export const pipe = (...fns: Function[]) => (value: string) => {
  return fns.reduce((acc, cur) => cur(acc), value);
}

type getTextColorType = {
  r: number;
  g: number;
  b: number;
}

export const getTextColor = ({ r, g, b }: getTextColorType):string => { //https://www.w3.org/WAI/ER/WD-AERT/#color-contrast
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = yiq < 125 ? '#fff' : '#000';
  return textColor;
}

export const getHexToRGB = (colorString: string) => {
  const hex = colorString.trim().replace("#", "");
  const rgbWord = hex.length === 3 ? hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);
  if (!rgbWord) return { r: 0, g: 0, b: 0 };
  const rgbNumberArray = rgbWord.map((color) => {
    const rgbTwoLetter = color.length === 1 ? color + color : color;
    return parseInt(rgbTwoLetter, 16);
  });
  return { r: rgbNumberArray[0], g: rgbNumberArray[1], b: rgbNumberArray[2] };
}