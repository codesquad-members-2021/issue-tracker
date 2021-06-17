import API from 'util/api/api';

export default async function fetchLogin(code: string): Promise<any> {
  const postLoginOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(API.login(code), postLoginOption);
  const data = await response.json();
  return data;
}
