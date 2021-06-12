import { atom, selector } from 'recoil';
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

export const issueFilterTypeState = atom<string>({
  key: 'issueFilterTypeState',
  default: '',
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
      const response = await fetch(`http://3.37.76.224/api/issues?status=${issueType}`);
      const issuesData = await response.json();
      const issuesInfoState = { issues: issuesData.issues, count: issuesData.count };
      return issuesInfoState;
    } catch (err) {
      throw new Error('잘못된 요청입니다.');
    }
  },
});

const headerInfo = {
  // headers: {
  //   Authorization: Bearer {token}
  // }
};
