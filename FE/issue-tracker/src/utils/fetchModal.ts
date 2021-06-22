import { baseURL } from '@const/var';

type fetchModalType = {
  path: string;
  setState: (state: any) => void;
};

const handleError = (status: number) => {
  if (status >= 400 && status < 500) throw `💢 에러!!!(${status})`;
  else if (status >= 500) throw '🚨 서버 확인!!!';
};

export const fetchModal = async ({ path, setState }: fetchModalType) => {
  try {
    const token = localStorage.getItem('oauth_login');
    const requestHeader = {
      Authorization: `bearer ${token}`,
    };
    const res = await fetch(`${baseURL}/${path}`, {
      method: 'GET',
      headers: requestHeader,
    });

    handleError(res.status);
    const json = await res.json();
    setState(json);
  } catch (error) {
    if (typeof error === 'string') throw error;
    else {
      throw '🔺 요청 주소 확인!!';
    }
  }
};
