import { DecodedUserDataType, TestType } from './types/storeTypes';
import axios from 'axios';
import { milestoneQuery } from 'stores/milestoneStore';
import { selector, atom } from 'recoil';
import { LabelItemType, IssueItemType, IssuesCountType } from 'types/issueType';
import { LabelDataType, UserDataType, IssueDataType } from 'types/storeTypes';

export const totalCountOfLabels = selector<number>({
  key: 'totalCountOfLabels',
  get: ({ get }) => {
    return get(labelQuery).length;
  },
});

export const issuesStateAtom = atom<boolean>({
  key: 'issuesState',
  default: false,
});

export const clickedIssueIdAtom = atom<number | null>({
  key: 'clickedIssueIdAtom',
  default: null,
});

export const decodedUserDataAtom = atom<DecodedUserDataType | null>({
  key: 'decodedUserDataAtom',
  default: null,
});

export const issueDetailQuery = selector({
  key: 'issueDetailQuery',
  get: async ({ get }) => {
    const token = localStorage.getItem('jwt');
    const clickedIssueId = get(clickedIssueIdAtom);
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/issues/${clickedIssueId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      title: data.title,
      description: data.description,
    };
  },
});

export const totalCountOfIssue = selector<IssuesCountType>({
  key: 'totalCountOfIssue',
  get: async () => {
    const token = localStorage.getItem('jwt');
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

export const issuesQuery = selector<IssueItemType[]>({
  key: 'issuesQuery',
  get: async ({ get }) => {
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

const parsedLabelData = (labelItem: LabelDataType) => ({
  id: labelItem.id,
  title: labelItem.title,
  description: labelItem.description,
  labelColor: labelItem.color_code,
  textColor: labelItem.font_light ? 'light' : 'dark',
});

export const labelUpdateAtom = atom<number>({
  key: 'labelUpdateAtom',
  default: 0,
});

export const labelQuery = selector<LabelItemType[]>({
  key: 'labelQuery',
  get: async ({ get }) => {
    get(labelUpdateAtom);
    const token = localStorage.getItem('jwt');
    console.log('dd', labelUpdateAtom);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/labels`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.map(parsedLabelData);
    } catch (error) {
      console.error('labelQuery 에러', error);
      return [];
    }
  },
  //  set: ({set}, newValue) => set(myAtom, newValue),
});

const parsedAuthorData = (user: UserDataType) => ({
  name: user.name,
  profileImg: user.avatar_url,
});

export const authorQuery = selector({
  key: 'authorQuery',
  get: async () => {
    const token = localStorage.getItem('jwt');
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/authors`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.map((user: UserDataType) => ({
        id: user.user_id,
        description: user.name,
        imgurl: user.avatar_url,
      }));
    } catch (error) {
      console.error(error, 'author 에러');
      return [];
    }
  },
});

export const assigneeQuery = selector({
  key: 'assigneeQuery',
  get: async () => {
    try {
      const token = localStorage.getItem('jwt');
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/assignees`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.map((user: UserDataType) => ({
        id: user.user_id,
        description: user.name,
        imgurl: user.avatar_url,
      }));
    } catch (error) {
      console.error(error, 'assignee 에러');
      return [];
    }
  },
});

export const filterSelector = selector<TestType>({
  key: 'filterSelector',
  get: ({ get }) => {
    return {
      labelList: get(labelQuery),
      milestoneList: get(milestoneQuery),
      authorList: get(authorQuery),
      assigneeList: get(assigneeQuery),
    };
  },
});
