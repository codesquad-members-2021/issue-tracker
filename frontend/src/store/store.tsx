import { atom, selector } from 'recoil';
interface newAsyncCount {
  label: number;
  milestone: number;
  openedIssue: number;
  closedIssue: number;
}

const countInfo = atom<any>({
  key: 'countInfo',
  default: { label: 0, milestone: 0, openedIssue: 0, closeIssue: 0 },
});

export const CountInfoStorage = selector<any>({
  key: 'storage/countInfo',
  get: ({ get }) => {
    const countInfos = get(countInfo);
    return countInfos;
  },
  set: ({ set }, newAsync: newAsyncCount) => {
    const {
      label: nLabel,
      milestone: nMilestone,
      openedIssue: nOpenedIssue,
      closedIssue: nClosedIssue,
    } = newAsync;
    set(countInfo, (prev) => ({
      ...prev,
      label: nLabel,
      milestone: nMilestone,
      openedIssue: nClosedIssue,
      closedIssue: nOpenedIssue,
    }));
  },
});

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

const issues = atom<any>({
  key: 'issues',
  default: [],
});

export const issuesStorage = selector<IssuesType[]>({
  key: 'storage/issues',
  get: ({ get }) => {
    const result = get(issues);
    return result;
  },
  set: ({ set }, newAsync) => {
    set(issues, newAsync);
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
      const response = await fetch(`http://3.37.76.224/api/issues?status=open`, {
        // headerInfo
      });
      return response.json();
    } catch (err) {
      console.error(err);
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
      return response.json();
    } catch (err) {
      console.error(err);
    }
  },
});
