const CURRENT_TIME = new Date();
const timeToConvert = new Map([
  ['초', 1000],
  ['분', 60000],
  ['시간', 3.6e+6],
  ['일', 8.64e+7],
  ['주', 6.048e+8]
]);

export const getTimeTaken = (createIssueTime: string): string => {
  const timeTakenMilliseconds = CURRENT_TIME.getTime() - new Date(createIssueTime).getTime();
  const divideToTimeArray = Array.from(timeToConvert.entries()).find(([_, time], idx, array) => {
    return time <= timeTakenMilliseconds && timeTakenMilliseconds < array[idx + 1][1];
  });
  const [timeKind, timeToDivided] = divideToTimeArray || ['밀리초', 1];
  return `${Math.floor(timeTakenMilliseconds / timeToDivided)}${timeKind}`;
}

type getTextColorType = {
  r: number;
  g: number;
  b: number;
}

export const getTextColor = ({ r, g, b }: getTextColorType): string => { //https://www.w3.org/WAI/ER/WD-AERT/#color-contrast
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = yiq < 163 ? '#fff' : '#000'; //125로 했는데 내눈에 잘 안맞아서 163으로 수정
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

export const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  const randomColorArray = Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]);
  return `#${randomColorArray.join('')}`;
}