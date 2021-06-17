import atom from '@/utils/myRecoil/atom';
import { IssueListItemType } from '@components/common/types/APIType';

export const issueListItemAtom = atom<IssueListItemType[]>({
  key: 'issueListItemAtom',
  default: []
});

