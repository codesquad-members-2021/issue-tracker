import { atom, selector } from 'recoil';
interface newAsyncCount {
  label: number;
  milestone: number;
  openedIssue: number;
  closedIssue: number;
}

type LabelsProp = {
  id: number;
  name: string;
  colorCode: string;
  description: string;
  checked: boolean;
};

interface IssuesType {
  assignees: string[];
  author: string;
  comment: string;
  commentNumber: number;
  createdDateTime: string;
  id: number;
  labels: LabelsProp[];
  milestone: string;
  title: string;
}

export const issueTypeState = atom<string>({
  key: 'issueTypeState',
  default: 'open',
});

export const getIssues = selector<IssuesType[]>({
  key: 'getIssues',
  get: async ({ get }) => {
    try {
      const issueType = get(issueTypeState);
      if (issueType === 'open') return get(getOpenIssues);
      else if (issueType === 'closed') return get(getCloseIssues);
    } catch (err) {
      console.error(err);
    }
  },
});

const headerInfo = {
  // headers: {
  //   Authorization: Bearer {token}
  // }
};
export const getOpenIssues = selector({
  key: 'GET/issues/open',
  get: async () => {
    try {
      const response = await fetch(`http://3.37.76.224/api/issues?status=open`);
      const openIssueData = await response.json();
      return openIssueData.issues;
    } catch (err) {
      throw new Error('잘못된 요청입니다.');
    }
  },
});
export const getCloseIssues = selector({
  key: 'GET/issues/close',
  get: async () => {
    try {
      const response = await fetch(`http://3.37.76.224/api/issues?status=close`, {
        // headerInfo
      });
      const closeIssueData = await response.json();
      return closeIssueData.issues;
    } catch (err) {
      throw new Error('잘못된 요청입니다.');
    }
  },
});
