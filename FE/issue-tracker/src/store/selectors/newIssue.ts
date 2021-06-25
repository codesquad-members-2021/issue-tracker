import { selector } from 'recoil';
import { newIssueTitleAtom, newIssueContentsAtom } from '../atoms/newIssue';
import {
  checkedAssigneesAtom,
  checkedLabelsAtom,
  checkedMilestoneAtom,
} from '../atoms/checkedThings';

export const getNewIssueBody = selector({
  key: 'getNewIssueBody',
  get: ({ get }) => {
    const header = {
      method: 'POST',
      body: JSON.stringify({
        title: get(newIssueTitleAtom),
        description: get(newIssueContentsAtom),
        assignee: get(checkedAssigneesAtom)[0],
        label_ids: get(checkedLabelsAtom),
        milestone_id: get(checkedMilestoneAtom)?.id,
      }),
    };
    return header;
  },
});
