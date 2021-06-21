import { atom } from 'recoil';

export const checkedAssigneesState = atom({
  key: 'checkedAssignees',
  default: [],
});

type labelType = {
  id: string;
  index: string;
  title: string;
  color_code: string;
  font_light: string;
};

export const checkedLabelsState = atom<labelType[]>({
  key: 'checkedLabels',
  default: [],
});

export const checkedMilestoneState = atom({
  key: 'checkedMilestone',
  default: null,
});
