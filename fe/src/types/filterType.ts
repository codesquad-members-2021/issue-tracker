export type FilterItemType = {
  description: string;
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
  filterTitle: string;
  filterList: FilterItemType[];
}