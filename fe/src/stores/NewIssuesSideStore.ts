import { atom, selector } from 'recoil';

// export const NewIssuesLabelIdAtom = atom<number[]>({
//   key: 'NewIssuesLabelIdAtom',
//   default: [],
// });
// export const NewIssuesAssigneeIdAtom = atom<number[]>({
//   key: 'NewIssuesAssigneeIdAtom',
//   default: [],
// });
// export const NewIssuesMilestoneIdAtom = atom<number[]>({
//   key: 'NewIssuesMilestoneIdAtom',
//   default: [],
// });

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
