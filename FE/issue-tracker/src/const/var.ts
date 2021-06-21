export const issueAPI = process.env.REACT_APP_API_ISSUE;
export const hostAPI = process.env.REACT_APP_API;
export const urlErrorMsg = '요청하신 주소에 문제가 있습니다.';
export const issueListErrorMsg = '이슈 목록을 불러오는 데 실패했습니다.';

const clientID = process.env.REACT_APP_CLIENT_ID;

export const baseURL = 'http://15.164.68.136/api';
const localURL = 'http://localhost:3000/api';

export const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${localURL}/login/callback&scope=user`;

export const TOKEN_URL = `${baseURL}/login/auth?client=web&code=`;

export const menuOptions = [
  {
    id: 1,
    title: '열린 이슈',
    value: 'open',
  },
  {
    id: 2,
    title: '내가 작성한 이슈',
    value: 'author',
  },
  {
    id: 3,
    title: '나에게 할당된 이슈',
    value: 'assignee',
  },
  {
    id: 4,
    title: '내가 댓글을 남긴 이슈',
    value: 'comment',
  },
  {
    id: 5,
    title: '닫힌 이슈',
    value: 'close',
  },
];
