export type FilterItemType = {
  id: number;
  title: string;
  imgurl?: string | null;
  labelColor?: string;
};

export type FilterListType = {
  filterList: FilterItemType[];
  filterTitle: string;
};

export type FilterItemPropsType = {
  filterItem: FilterItemType;
  isEnd: boolean;
};

export type FilterPropsType = {
  filterType: FilterSelectorType;
  isPlus?: boolean;
};

export type FilterSelectorType = 'milestoneList' | 'labelList';
//| 'authorList'| 'assigneeList';
