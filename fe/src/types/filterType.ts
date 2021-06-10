import { PopupState } from 'material-ui-popup-state/core';

export type FilterItemType = {
  description: string;
  imgurl?: string | null;
  labelColor?: string;
};

export type FilterListType = {
  filterList: FilterItemType[];
  popupState: PopupState;
};

export type FilterItemPropsType = {
  popupState: PopupState;
  filterItem: FilterItemType;
};
