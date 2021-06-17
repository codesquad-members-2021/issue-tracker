import { atom } from 'recoil';

interface IFilterVisibleAtom {
  search: boolean;
  assignee: boolean;
  label: boolean;
  milestone: boolean;
  writer: boolean;
}

type TFilterVisibleAtomTypes =
  | 'search'
  | 'assignee'
  | 'label'
  | 'milestone'
  | 'writer';

const filterVisibleAtom = atom<IFilterVisibleAtom>({
  key: 'filterVisibleAtom',
  default: {
    search: false,
    assignee: false,
    label: false,
    milestone: false,
    writer: false,
  },
});

// =====

export { filterVisibleAtom };
export type { IFilterVisibleAtom, TFilterVisibleAtomTypes };
