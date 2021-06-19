import API from 'util/api/api';

export async function fetchLogin(code: string): Promise<any> {
  try {
    const postLoginOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(API.login(code), postLoginOption);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
