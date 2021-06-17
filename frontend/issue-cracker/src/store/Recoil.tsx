import { atom } from 'recoil';

export const addState = atom({
  key: 'addState',
  default: false,
});

export const token = atom({
  key: 'token',
  default: null,
});
export const decodedToken = atom({
  key: 'decodedToken',
  default: {
    name: '',
    profileImageUrl: '',
  },
});

// export const DecodedToken = selector({
//   key: 'setToken',
//   get: ({get}) => {
//     const token = get(token)
//     const decoded = jwtDecoded(token)
//     return decoded
//   }
// })
