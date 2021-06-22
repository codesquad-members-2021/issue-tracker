import { labelType, milestoneType } from '@store/atoms/checkedThings';

export type getClickedItemInfoType = {
  menu: string;
  menuData: any[];
  checkedId: string;
};

export type setCheckedBooleanType = {
  menu: string;
  checkedId: string;
  isChecked: {
    [id: string]: boolean;
  };
  setIsChecked: (state: any) => void;
};

export type setCheckedMenusItemType = {
  menu: string;
  isItemChecked: boolean;
  checkedMenus: labelType[] | milestoneType | null;
  setCheckedMenus: (state: any) => void;
  menuInfo: { id: number };
};

export type getCheckedIdType = {
  target: HTMLInputElement;
  menuData: any[] | null;
};

export type handleClickMenuItemType = {
  menu: string;
  menuData: any[] | null;
  checkedId: string;
  isChecked: {
    [id: string]: boolean;
  };
  setIsChecked: (state: any) => void;
  checkedMenus: labelType[] | milestoneType | null;
  setCheckedMenus: (state: any) => void;
};
