export const test = 'url';

export const issueAPI = process.env.REACT_APP_API_ISSUE;
export const hostAPI = process.env.REACT_APP_API;
export const urlErrorMsg = '요청하신 주소에 문제가 있습니다.';
export const issueListErrorMsg = '이슈 목록을 불러오는 데 실패했습니다.';

const clientID = process.env.REACT_APP_CLIENT_ID;

const baseURL = 'http://localhost:3000/api';

export const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${baseURL}/login/callback&scope=user`;

export const TOKEN_URL =
  'https://f88e009a-3e2b-4862-838e-1f2cde9b95ed.mock.pstmn.io/api/login/auth?client=web&code=';
