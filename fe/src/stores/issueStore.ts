import axios from 'axios';
import { atom, selector } from 'recoil';
import { parsedLabelData, parsedAuthorData } from 'utils/util';
import { labelUpdateAtom } from 'stores/labelStore';
import { milestoneUpdateAtom } from 'stores/milestoneStore';
import { IssueDataType } from 'types/storeTypes';
import { IssuesCountType, IssueItemType } from 'types/issueType';

export const issuesStateAtom = atom<boolean>({
  key: 'issuesState',
  default: false,
});

export const clickedIssueIdAtom = atom<number | null>({
  key: 'clickedIssueIdAtom',
  default: null,
});

export const totalCountOfIssue = selector<IssuesCountType>({
  key: 'totalCountOfIssue',
  get: async ({ get }) => {
    const token = localStorage.getItem('jwt');
    get(issuesQuery);

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/issues/count`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { open: data.opened_issue_count, close: data.closed_issue_count };
    } catch {
      return { open: null, close: null };
    }
  },
});

export const issuesUpdateAtom = atom<number>({
  key: 'issuesUpdateAtom',
  default: 0,
});

export const issuesQuery = selector<IssueItemType[]>({
  key: 'issuesQuery',
  get: async ({ get }) => {
    get(issuesUpdateAtom);
    get(labelUpdateAtom);
    get(milestoneUpdateAtom);
    const token = localStorage.getItem('jwt');
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/issues?closed=${get(
          issuesStateAtom
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.map(
        ({
          id,
          title,
          label_list,
          issue_number,
          created_time,
          milestone_title,
          author,
        }: IssueDataType) => ({
          id: id,
          title: title,
          labeList: label_list.map(parsedLabelData),
          issueNumber: issue_number,
          createdTime: created_time,
          milestoneTitle: milestone_title,
          author: parsedAuthorData(author),
        })
      );
    } catch (error) {
      console.error('close 조건에 따른 이슈 검색', error);
      return [];
    }
  },
});

export type NewIssuesContentType = {
  title: string;
  description: string;
};

export const newIssuesContentAtom = atom<NewIssuesContentType>({
  key: 'newIssuesContentAtom',
  default: {
    title: '',
    description: '',
  },
});
