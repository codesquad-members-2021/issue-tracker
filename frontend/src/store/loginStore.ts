import { atom } from 'recoil';

interface loginStateType {
  avatarUrl: string;
  userName: string;
  token: string;
}

export const loginState = atom<loginStateType | null>({
  key: 'loginState',
  default: null,
});
