import { SetterOrUpdater } from 'recoil';
import { NewIssuesIdType } from 'stores/NewIssuesSideStore';

export type assigneeQueryType = {
  id: number;
  imgurl: string;
  title: string;
};

export type FilterItemType = {
  id: number;
  title: string;
  imgurl?: string | null;
  description?: string;
  labelColor?: string;
};

export type FilterListType = {
  filterList: FilterItemType[];
  filterTitle: string;
  onClose: () => void;
  setState?: SetterOrUpdater<NewIssuesIdType>;
  clickHandler?: (e: React.MouseEvent<HTMLLIElement>) => void;
  value?: number[];
};

export type FilterItemPropsType = {
  filterItem: FilterItemType;
  isEnd: boolean;
  onClose: () => void;
  setState?: SetterOrUpdater<NewIssuesIdType>;
  clickHandler?: (e: React.MouseEvent<HTMLLIElement>) => void;
  value?: number[];
};

export type FilterPropsType = {
  filterType: FilterSelectorType;
  isPlus?: boolean;
  setState?: SetterOrUpdater<NewIssuesIdType>;
  clickHandler?: (e: React.MouseEvent<HTMLLIElement>) => void;
  value?: number[];
};

export type FilterSelectorType =
  | 'milestoneList'
  | 'labelList'
  | 'assigneeList'
  | 'authorList';
