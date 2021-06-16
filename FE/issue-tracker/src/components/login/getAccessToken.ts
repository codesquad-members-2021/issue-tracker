import { TOKEN_URL } from '@const/var';

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
    localStorage.setItem('oauth_login', jwt);
    setIsLogin(true);
    window.location.href = '/issues';
  } catch (error) {
    console.error('getAccessToken Error');
  }
};

export default fetchToken;
