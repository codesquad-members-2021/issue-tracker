import atom from '@/utils/myRecoil/atom';

export type CheckBoxItemType = Set<number>;

export const issueCheckedItemAtom = atom<CheckBoxItemType>({
  key: 'issueCheckItemAtom',
  default: new Set()
})

export const issueCheckedAllItemAtom = atom<boolean>({
  key:'issueCheckedAllItemAtom',
  default: false
})