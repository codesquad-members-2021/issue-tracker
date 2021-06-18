import { atom, selector } from 'recoil';

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});

interface loginStateType {
  avatarUrl: string;
  userName: string;
  token: string;
}

export const loginState = atom<loginStateType | null>({
  key: 'loginState',
  default: null,
});

/*
로그인: loginState - 로그인정보
로그아웃: loginState - null
*/
export const controlLoginState = selector<loginStateType | null>({
  key: 'controlLoginState',
  get: ({ get }) => {
    return null;
  },
  set: ({ set }, loginData) => {
    set(loginState, loginData);
    if (loginData) set(isLoginState, true);
    else set(isLoginState, false);
  },
});
