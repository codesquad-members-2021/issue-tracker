import jwt_decode from 'jwt-decode';
import { TOKEN_URL } from '@const/var';

type decodedType = {
  avatar_url: string;
  name: string;
  id: number;
  iss: string;
};

const getDecodedOauthToken = (jwt: string) => {
  const decoded: decodedType = jwt_decode(jwt);
  const loginInfo = {
    avatar_url: decoded.avatar_url,
    name: decoded.name,
    id: decoded.id,
  };
  return loginInfo;
};

type Arg = {
  isLogin: boolean;
  setIsLogin: (state: boolean) => void;
  code: string;
};

const fetchToken = async ({ isLogin, setIsLogin, code }: Arg) => {
  if (isLogin) return;
  try {
    const response = await fetch(TOKEN_URL + code);
    const { jwt } = await response.json();
    const decodedOauthToken = getDecodedOauthToken(jwt);
    localStorage.setItem('oauth_login_token', jwt);
    localStorage.setItem('login_info', JSON.stringify(decodedOauthToken));
    setIsLogin(true);
    window.location.href = '/issues';
  } catch (error) {
    console.error('getAccessToken Error');
  }
};

export default fetchToken;
