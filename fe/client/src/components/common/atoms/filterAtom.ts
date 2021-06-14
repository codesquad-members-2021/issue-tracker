
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

export type FilterStringType = {
  issue: string;
  manager: string;
  label: string;
  milestone: string;
  writer: string;
}

export const filterDefaultCheckerAtom = atom<FilterStringType>({
  key: 'filterDefaultCheckerAtom',
  default: {
    issue: '',
    manager: '',
    label: '',
    milestone: '',
    writer:'' 
  }
})

