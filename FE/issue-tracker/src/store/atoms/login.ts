import { atom } from 'recoil';

export type loginInfoType = {
  name: string;
  avatar_url: string;
  id: number | null;
};

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});

export const loginInfoState = atom<loginInfoType>({
  key: 'loginInfoState',
  default: { name: '', avatar_url: '', id: null },
});
