export const handleError = (status: number, errorMsg: string) => {
  if (status >= 400 && status < 500) throw errorMsg;
  if (status >= 500) throw `서버를 확인해주세요.`;
};

export const fetchWithAuth = async (
  url: string,
  errorMsg: string,
  options = {}
) => {
  const token = localStorage.getItem('oauth_login');
  const requestHeader: any = {
    Authorization: `bearer ${token}`,
  };
  const optionWithHeaders = { ...options, headers: requestHeader };
  try {
    const res = await fetch(url, optionWithHeaders);
    handleError(res.status, errorMsg);
    return res;
  } catch (error) {
    throw error;
  }
};
