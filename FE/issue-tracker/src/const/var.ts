export const issueAPI = process.env.REACT_APP_API_ISSUE;
export const hostAPI = process.env.REACT_APP_API;
export const urlErrorMsg = '요청하신 주소에 문제가 있습니다.';
export const issueListErrorMsg = '이슈 목록을 불러오는 데 실패했습니다.';

export const baseURL = 'http://15.164.68.136/api';

const clientID = process.env.REACT_APP_CLIENT_ID;
const localURL = 'http://localhost:3000/api';
export const LOGIN_URL = `http://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${localURL}/login/callback&scope=user`;

export const TOKEN_URL = `${baseURL}/login/auth?client=web&code=`;
