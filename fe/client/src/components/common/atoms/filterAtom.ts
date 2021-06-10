
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


