import { LabelType, MilestoneType, UserType } from 'components/common/tabModal/tapDataType';
import { atom, selector } from 'recoil';
import API from 'util/api/api';
interface countType {
  label: number;
  milestone: number;
  openedIssue: number;
  closedIssue: number;
}

interface LabelColorType {
  backgroundColorCode: string;
  textColorCode: string;
}

interface LabelProp {
  id: number;
  name: string;
  color: LabelColorType;
  description: string;
  checked: boolean;
}

interface IssuesType {
  assignees: string[];
  author: string;
  comment: string;
  commentNumber: number;
  createdDateTime: string;
  id: number;
  labels: LabelProp[];
  milestone: string;
  title: string;
}

interface IssuesInfoStateType {
  issues: IssuesType[];
  count: countType;
}

export const issueTypeState = atom<string>({
  key: 'issueTypeState',
  default: 'open',
});

// interface IssueFilterType {
//   type: string;
//   select: string;
// }

export const isFilterFullSetting = atom<boolean>({
  key: 'isFilterFullSetting',
  default: true,
});

export const issueFilterTypeState = atom<{ key: string; name: string; isMainPage: boolean }>({
  key: 'issueFilterTypeState',
  default: { name: '', key: '', isMainPage: true },
});

export const issueFilterSelectState = atom<string>({
  key: 'issueFilterSelectState',
  default: '',
});

export const getIssuesInfoState = selector<IssuesInfoStateType | null>({
  key: 'GET/issues',
  get: async ({ get }) => {
    const issueType = get(issueTypeState);
    const isFilterSetting = get(isFilterFullSetting);
    if (!isFilterSetting) return null;
    try {
      const response = await fetch(API.getIssue + issueType);
      const issuesData = await response.json();
      const issuesInfoState = { issues: issuesData.issues, count: issuesData.count };
      return issuesInfoState;
    } catch (err) {
      throw new Error('잘못된 요청입니다.');
    }
  },
});

interface TabInfoType {
  [key: string]: any;
}

export const getTabInfoState = selector({
  key: 'GET/tabinfo',
  get: async () => {
    try {
      const response = await fetch(API.tabType);
      const tabData = await response.json();
      const tabInfos: TabInfoType = {
        assignee: tabData.assignees,
        label: tabData.labels,
        milestone: tabData.milestones,
      };
      return tabInfos;
    } catch (err) {
      throw new Error('잘못된 요청입니다.');
    }
  },
});

export interface selectedTabType {
  assignee: Array<UserType> | [];
  label: Array<LabelType> | [];
  milestone: MilestoneType | null;
  [key: string]: [] | Array<UserType> | Array<LabelType> | MilestoneType | null;
}
//잠시 주석
// export const selectedTabState = atom<selectedTabType>({
//   key: 'selectedTabState',
//   default: {
//     assignee: null,
//     label: null,
//     milestone: null,
//   },
// });

const headerInfo = {
  // headers: {
  //   Authorization: Bearer {token}
  // }
};

const mokData = {
  assignee: [
    {
      id: 1,
      image: 'https://avatars.githubusercontent.com/u/63284310?v=4',
      userName: 'eNoLJ',
      assigned: true,
    },

    {
      id: 4,
      image: 'https://avatars.githubusercontent.com/u/74946802?v=4',
      userName: 'torch-ray',
      assigned: true,
    },
  ],
  label: [
    {
      id: 1,
      name: 'bug',
      color: {
        backgroundColorCode: '#F47378',
        textColorCode: '#000000',
      },
      description: 'bug fix',
      checked: true,
    },
  ],
  milestone: {
    id: 1,
    title: 'M1',
    description: 'M1 마일스톤에 대한 설명',
    createdDateTime: '2021-06-15T10:38:33',
    dueDate: '2021-06-21',
    openedIssueCount: 5,
    closedIssueCount: 0,
  },
};
export const selectedTabState = atom<selectedTabType>({
  key: 'selectedTabState',
  default: mokData,
});
