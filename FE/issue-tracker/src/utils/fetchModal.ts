import { baseURL } from '@const/var';

type fetchModalType = {
  path: string;
  setState: (state: any) => void;
  setErrorMsg: (state: any) => void;
};

const handleError = (status: number) => {
  if (status >= 400 && status < 500) throw `💢 에러!!!(${status})`;
  else if (status >= 500) throw `🚨 서버 확인!!!(${status})`;
};

const getHeaders = (): any => {
  const oauthToken = localStorage.getItem('oauth_login_token');
  return {
    headers: {
      Authorization: `bearer ${oauthToken}`,
    },
  };
};

export const fetchModal = async ({
  path,
  setState,
  setErrorMsg,
}: fetchModalType) => {
  try {
    const res = await fetch(`${baseURL}/${path}`, getHeaders());
    handleError(res.status);
    const json = await res.json();
    setState(json);
    setErrorMsg('No Error');
  } catch (error) {
    if (typeof error === 'string') throw setErrorMsg(error);
    else {
      throw setErrorMsg('🔺 요청 주소 확인!!');
    }
  }
};
