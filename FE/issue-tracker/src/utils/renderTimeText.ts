const getCreatedTime = (time: string): number => new Date(time).getTime();

const getTimeGapFromCreation =
  (currentTime: number) => (createdTime: number) => {
    return currentTime - createdTime;
  };

const getTotalMinutesBetweenGap = (time: number) => time / 1000 / 60;

const checkIfDayPassedFromCreation = (minutes: number) => [
  minutes > 24 * 60,
  minutes,
];

const getTime = (checkDayArr: [boolean, number]) => {
  const [isDayPassed, minutes] = checkDayArr;
  return isDayPassed
    ? { id: 'day', time: minutes / 60 / 24 }
    : { id: 'minute', time: minutes };
};

const getRenderingText = ({ id, time }: Time) => {
  if (id === 'day') return `${Math.floor(time)}일 전`;
  if (time < 60) return `${Math.floor(time)}분 전`;
  return `${Math.floor(time / 60)}시간 전`;
};

type Time = {
  id: string;
  time: number;
};

export {
  getCreatedTime,
  getTimeGapFromCreation,
  getTotalMinutesBetweenGap,
  checkIfDayPassedFromCreation,
  getTime,
  getRenderingText,
};
