import { atom } from 'recoil';

export type NewIssuesIdType = {
  labelList: number[];
  assigneeList: number[];
  milestoneList: number[];
};

export const NewIssuesIdQuery = atom<NewIssuesIdType>({
  key: 'NewIssuesIdQuery',
  default: {
    labelList: [],
    assigneeList: [],
    milestoneList: [],
  },
});
