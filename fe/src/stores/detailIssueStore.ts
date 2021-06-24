import { clickedIssueIdAtom } from 'store';
import { IssueDetailType } from './../types/issueType';
import { atom, selector } from 'recoil';
import axios from 'axios';
import { CommentDataType } from 'types/storeTypes';

export const detailIssueAuthorIdAtom = atom<number>({
  key: 'detailIssueAuthorIdAtom',
  default: 0,
});

export const commentDesctiptionAtom = atom<string>({
  key: 'commentDesctiption',
  default: '',
});

export const issueDetailQuery = selector<IssueDetailType>({
  key: 'issueDetailQuery',
  get: async ({ get }) => {
    const token = localStorage.getItem('jwt');
    const clickedIssueId = get(clickedIssueIdAtom);
    try {
      if (!clickedIssueId)
        return {
          title: null,
          description: null,
          assignees: null,
          isOpened: true, // null로 하니 IssueDetailHeader에서 타입에러 나서 true로 써둠
          milestone: null,
          author: null,
          createdTime: null,
          issueNumber: null,
          labelList: null,
          commentsCount: null,
        };

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
        assignees: data.assignees,
        isOpened: !data.closed,
        milestone: data.milestone,
        author: data.author,
        createdTime: data.created_time,
        issueNumber: data.issue_number,
        labelList: data.label_list,
        commentsCount: data.num_of_comments,
      };
    } catch (error) {
      console.error('issueDetailQuery 에러', error);
      return {
        title: null,
        description: null,
        assignees: null,
        isOpened: true, // null로 하니 IssueDetailHeader에서 타입에러 나서 true로 써둠
        milestone: null,
        author: null,
        createdTime: null,
        issueNumber: null,
        labelList: null,
        commentsCount: null,
      };
    }
  },
});

export const commentsQuery = selector({
  key: 'commentsQuery',
  get: async ({ get }) => {
    const token = localStorage.getItem('jwt');
    const clickedIssueId = get(clickedIssueIdAtom);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/issues/${clickedIssueId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.length
        ? data.map((item: CommentDataType) => ({
            id: item.id,
            description: item.description,
            createdTime: item.created_time,
            author: item.author,
          }))
        : [];
    } catch (error) {
      console.error('commentsQuery 에러', error);
      return [];
    }
  },
});
