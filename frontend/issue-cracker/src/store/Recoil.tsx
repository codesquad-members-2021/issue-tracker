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

export const dropAsigneeState = atom({
  key: 'dropAsigneeState',
  default: false,
});
export const dropLabelState = atom({
  key: 'dropLabelState',
  default: false,
});
export const dropMilestoneState = atom({
  key: 'dropMilestoneState',
  default: false,
});

// export const DecodedToken = selector({
//   key: 'setToken',
//   get: ({get}) => {
//     const token = get(token)
//     const decoded = jwtDecoded(token)
//     return decoded
//   }
// })
