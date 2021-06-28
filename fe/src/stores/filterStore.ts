import { selector } from 'recoil';
import { authorQuery, assigneeQuery } from 'stores/userStore';
import { labelQuery } from 'stores/labelStore';
import { milestoneQuery } from 'stores/milestoneStore';
import { filterSelectorType } from 'types/storeTypes';
export const filterSelector = selector<filterSelectorType>({
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
