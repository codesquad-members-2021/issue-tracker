export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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