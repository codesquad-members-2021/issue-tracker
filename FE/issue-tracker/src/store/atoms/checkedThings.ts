import { atom } from 'recoil';

export type labelType = {
  id: number;
  title: string;
  description: string;
  color_code: string;
  font_light: boolean;
};

export type milestoneType = {
  id: number;
  title: string;
  description: string;
  due_date: string;
  opened_issue_count: number;
  closed_issue_count: number;
};

export const checkedAssigneesState = atom({
  key: 'checkedAssignees',
  default: [],
});

export const checkedLabelsState = atom<labelType[]>({
  key: 'checkedLabels',
  default: [],
});

export const checkedMilestoneState = atom<milestoneType | null>({
  key: 'checkedMilestone',
  default: null,
});
