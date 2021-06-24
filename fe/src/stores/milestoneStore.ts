import { MilestonesItemProps } from './../types/issueType';
import axios from 'axios';
import { selector, atom } from 'recoil';
import { MilestoneDataType } from 'types/storeTypes';

export const milestoneQuery = selector<MilestonesItemProps[]>({
  key: 'milestoneQuery',
  get: async () => {
    const token = localStorage.getItem('jwt');
    try {
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
        title: milestoneItem.title,
      }));
    } catch (error) {
      console.error('milestone 에러', error);
      return [];
    }
  },
});


export const milestoneUpdateAtom = atom<number>({
  key: 'milestoneUpdateAtom',
  default: 0,
});

export const openedMilestoneQuery = selector<MilestonesItemProps[]>({
  key: 'openedMilestoneQuery',
  get: async ({get}) => {
    get(milestoneUpdateAtom)
    const token = localStorage.getItem('jwt');
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/milestones?closed=false`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.map((milestoneItem: MilestoneDataType) => ({
        id: milestoneItem.id,
        title: milestoneItem.title,
        description: milestoneItem.description,
        dueDate: milestoneItem.due_date,
        openedIssueCount: milestoneItem.opened_issue_count,
        closedIssueCount: milestoneItem.closed_issue_count,
      }));
    } catch (error) {
      console.error('openedMilestoneQuery 에러', error);
      return [];
    }
  },
});

export const closedMilestoneQuery = selector<MilestonesItemProps[]>({
  key: 'closedMilestoneQuery',
  get: async ({get}) => {
    get(milestoneUpdateAtom)
    const token = localStorage.getItem('jwt');
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/milestones?closed=true`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.map((milestoneItem: MilestoneDataType) => ({
        id: milestoneItem.id,
        title: milestoneItem.title,
        description: milestoneItem.description,
        dueDate: milestoneItem.due_date,
        openedIssueCount: milestoneItem.opened_issue_count,
        closedIssueCount: milestoneItem.closed_issue_count,
      }));
    } catch (error) {
      console.error('closedMilestoneQuery 에러', error);
      return [];
    }
  },
});

export const totalCountOfMilestone = selector<number>({
  key: 'totalCountOfMilestone',
  get: ({ get }) => {
    return get(milestoneQuery).length;
  },
});

export const countOfOpenedMilestone = selector<number>({
  key: 'countOfOpenedMilestone',
  get: ({ get }) => {
    return get(openedMilestoneQuery).length;
  },
});

export const countOfClosedMilestone = selector<number>({
  key: 'countOfClosedMilestone',
  get: ({ get }) => {
    return get(closedMilestoneQuery).length;
  },
});
