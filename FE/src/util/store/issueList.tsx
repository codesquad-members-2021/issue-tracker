// issueList (IssuePage)
import { atom } from 'recoil';
import { ILabelsInfo, IMilestonesInfo, IUsersInfo, IIssuesInfo } from 'util/types';

// 1. Modal 관련
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

// 2. API 관련

// IssuePage 데이터 (IssuePage 컴포넌트에서 최초로 불러옴)
type TissuePageData = {
  isLoading: boolean;
  data: {
    labels?: ILabelsInfo,
    milestones?: IMilestonesInfo,
    users?: IUsersInfo,
    issues?: IIssuesInfo
  };
};

const issuePageDataAtom = atom<TissuePageData>({
  key: 'issuePageDataAtom',
  default: {
    isLoading: true,
    data: {
      issues: undefined,
      milestones: undefined,
      labels: undefined
    }
  }
});

// =====

export { filterVisibleAtom, issuePageDataAtom };
export type { IFilterVisibleAtom, TFilterVisibleAtomTypes };
