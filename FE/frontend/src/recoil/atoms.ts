import { atom, RecoilState } from 'recoil';

interface Props {
  [key: string]: boolean | null | string;
}

const filterAtom = atom<Props>({
  key: 'filter',
  default: {
    isOpen: 'true',
    specialFilter: '',
    assignee: '',
    label: '',
    milstone: '',
    writer: '',
  },
});

export { filterAtom };
