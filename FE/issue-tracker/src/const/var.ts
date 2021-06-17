export const issueAPI = process.env.REACT_APP_API_ISSUE;

export const baseURL =
  'https://dc48e9f0-781a-4770-ac5b-997aadcc475a.mock.pstmn.io/api';

const clientID = process.env.REACT_APP_CLIENT_ID;
const localURL = 'http://localhost:3000/api';
export const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${localURL}/login/callback&scope=user`;

export const TOKEN_URL = `${baseURL}/login/auth?client=web&code=`;
