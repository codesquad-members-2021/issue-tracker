import jwt_decode from 'jwt-decode';
import { TOKEN_URL } from '@const/var';
import { loginInfoType } from '@store/atoms/login';

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
  setIsLogin: (state: boolean) => void;
  setLoginInfo: (state: loginInfoType) => void;
  code: string;
  history: any;
};

const fetchToken = async ({ setIsLogin, setLoginInfo, code, history }: Arg) => {
  try {
    const response = await fetch(TOKEN_URL + code);
    const { jwt } = await response.json();
    const decodedOauthToken = getDecodedOauthToken(jwt);
    localStorage.setItem('oauth_login_token', jwt);
    setLoginInfo(decodedOauthToken);
    setIsLogin(true);
    history.push('/issues');
  } catch (error) {
    console.error('getAccessToken Error');
  }
};

export default fetchToken;
