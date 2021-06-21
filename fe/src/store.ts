import { TestType } from './types/storeTypes';
import axios from 'axios';
import { selector } from 'recoil';
import { FilterItemType } from 'types/filterType';
import { LabelItemType } from 'types/issueType';
import {
  LabelDataType,
  MilestoneDataType,
  UserDataType,
} from 'types/storeTypes';

export const totalCountOfLabels = selector<number>({
  key: 'totalCountOfLabels',
  get: ({ get }) => {
    return get(labelQuery).length;
  },
});

export const labelQuery = selector<LabelItemType[]>({
  key: 'labelQuery',
  get: async () => {
    const token = localStorage.getItem('jwt');
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/labels`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.map((labelItem: LabelDataType) => ({
      id: labelItem.id,
      title: labelItem.title,
      description: labelItem.description,
      labelColor: labelItem.color_code,
      textColor: labelItem.text_color,
    }));
  },
});

export const totalCountOfMilestone = selector<number>({
  key: 'totalCountOfMilestone',
  get: ({ get }) => {
    return get(milestoneQuery).length;
  },
});

export const milestoneQuery = selector<FilterItemType[]>({
  key: 'milestoneQuery',
  get: async () => {
    const token = localStorage.getItem('jwt');
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/milestones`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.map((milestoneItem: MilestoneDataType) => ({
      id: milestoneItem.id,
      description: milestoneItem.title,
    }));
  },
});

export const authorQuery = selector({
  key: 'authorQuery',
  get: async () => {
    try {
      const token = localStorage.getItem('jwt');
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
