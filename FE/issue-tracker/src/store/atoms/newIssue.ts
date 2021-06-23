import { atom } from 'recoil';

export const isInputtedTitleAtom = atom({
  key: 'isInputtedTitleState',
  default: false,
});

export const isClickedCompleteBtnAtom = atom({
  key: 'isClickedCompleteBtnState',
  default: false,
});

export const newIssueContentsAtom = atom({
  key: 'newIssueContentsState',
  default: {
    title: '',
    description: '',
  },
});
