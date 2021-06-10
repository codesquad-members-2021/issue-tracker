
import atom from '@/utils/myRecoil/atom';

export type filterAtomType = {
  issue: boolean;
  manager: boolean;
  label: boolean;
  milestone: boolean;
  writer: boolean;
}

export const filterAtom = atom<filterAtomType>({
  key: 'filterAtom',
  initialState: {
    issue: false,
    manager: false,
    label: false,
    milestone: false,
    writer: false
  }
})

export type filterDefaultCheckerType = {
  issue: string;
  manager: string;
  label: string;
  milestone: string;
  writer: string;
}

export const filterDefaultCheckerAtom = atom<filterDefaultCheckerType>({
  key: 'filterDefaultCheckerAtom',
  initialState: {
    issue: '',
    manager: '',
    label: '',
    milestone: '',
    writer:'' 
  }
})


