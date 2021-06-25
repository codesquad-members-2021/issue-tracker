import { atom } from 'recoil';

export type assigneeType = {
  user_id: number;
  name: string;
  avatar_url: string;
};

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

export const checkedAssigneesAtom = atom<number[]>({
  key: 'checkedAssignees',
  default: [],
});

export const checkedLabelsAtom = atom<number[]>({
  key: 'checkedLabels',
  default: [],
});

export const checkedMilestoneAtom = atom<milestoneType | null>({
  key: 'checkedMilestone',
  default: null,
});
