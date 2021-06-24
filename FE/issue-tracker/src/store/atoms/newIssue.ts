import { atom } from 'recoil';

export const isInputtedTitleAtom = atom({
  key: 'isInputtedTitleState',
  default: false,
});

export const isClickedCompleteBtnAtom = atom({
  key: 'isClickedCompleteBtnState',
  default: false,
});

export const newIssueTitleAtom = atom({
  key: 'newIssueTitleAtom',
  default: '',
});

export const newIssueContentsAtom = atom({
  key: 'newIssueContentsAtom',
  default: '',
});
