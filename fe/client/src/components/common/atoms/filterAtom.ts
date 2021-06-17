
import atom from '@/utils/myRecoil/atom';

export type FilterBooleanType = {
  issue: boolean;
  manager: boolean;
  label: boolean;
  milestone: boolean;
  writer: boolean;
}

export const filterAtom = atom<FilterBooleanType>({
  key: 'filterAtom',
  default: {
    issue: false,
    manager: false,
    label: false,
    milestone: false,
    writer: false
  }
})

export type FilterRadioButtonListType = {
  [key: string]: { name: string, info: any }
}

export const filterRadioButtonListAtom = atom<FilterRadioButtonListType>({
  key: 'filterDefaultCheckerAtom',
  default: {
    issue: { name: '', info: {} },
    manager: { name: '', info: {} },
    label: { name: '', info: {} },
    milestone: { name: '', info: {} },
    writer: { name: '', info: {} }
  }
})

export type FilterCheckboxListType = {
  manager: string[];
  label: string[];
  milestone: string[];
  [key: string]: string[];
}

export const filterCheckboxListAtom = atom<FilterCheckboxListType>({
  key: 'filterCheckboxListAtom',
  default: { manager: [], label: [], milestone: [] }
});