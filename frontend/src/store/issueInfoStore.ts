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

const headerInfo = {
  // headers: {
  //   Authorization: Bearer {token}
  // }
};

export const selectedTabState = selector<selectedTabType>({
  key: 'selectedTabState',
  get: ({ get }) => {
    const selectUser = get(selectedUserState);
    const selectLabel = get(selectedLabelState);
    const selectMilestone = get(selectedMilestoneState);

    return { assignee: selectUser, label: selectLabel, milestone: selectMilestone };
  },
});

export const resetSelectedTab = selector<null>({
  key: 'resetSelectedTab',
  get: () => null,
  set: ({ get, reset }) => {
    reset(selectedUserState);
    reset(selectedLabelState);
    reset(selectedMilestoneState);
    console.log(get(selectedUserState));
  },
});

export const selectedUserState = atom<Array<UserType> | []>({
  key: 'selectedUserTabState',
  default: [],
});
export const selectedLabelState = atom<Array<LabelType> | []>({
  key: 'selectedLabelTabState',
  default: [],
});
export const selectedMilestoneState = atom<MilestoneType | null>({
  key: 'selectedMilestoneTabState',
  default: null,
});
