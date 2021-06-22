import { labelType, milestoneType } from '@store/atoms/checkedThings';
import {
  getClickedItemInfoType,
  setCheckedBooleanType,
  setCheckedMenusItemType,
  getCheckedIdType,
  handleClickMenuItemType,
} from './onClickMenuItem_types';

// 클릭된 메뉴 아이템의 정보 반환
const getClickedItemInfo = (args: getClickedItemInfoType) => {
  const { menu, menuData, checkedId } = args;
  let info: any;
  if (menu === 'label')
    info = menuData.find((label) => label.id === +checkedId) as labelType;
  if (menu === 'milestone')
    info = menuData.find(
      (milestone) => milestone.id === +checkedId
    ) as milestoneType;
  // if(menu === "assignee")
  return info;
};

// '아이템 클릭 여부' 상태 저장, 상태 반환
const getAndSetIsItemChecked = (args: setCheckedBooleanType) => {
  const { menu, checkedId, isChecked, setIsChecked } = args;
  const isItemChecked = isChecked[checkedId] ? false : true;
  if (menu === 'label') {
    setIsChecked({
      ...isChecked,
      [checkedId]: isItemChecked,
    });
  } else {
    setIsChecked({
      [checkedId]: isItemChecked,
    });
  }
  return isItemChecked;
};

// 아이템 클릭 여부에 따라 '클릭된 아이템' 상태 저장
const setCheckedMenusItem = (args: setCheckedMenusItemType) => {
  const { menu, isItemChecked, checkedMenus, setCheckedMenus, menuInfo } = args;
  if (
    menu === 'label' &&
    checkedMenus !== null &&
    Array.isArray(checkedMenus)
  ) {
    if (isItemChecked) setCheckedMenus([...checkedMenus, menuInfo]);
    else
      setCheckedMenus(checkedMenus.filter((menu) => menu.id !== menuInfo.id));
  } else if (menu === 'milestone') {
    if (isItemChecked) setCheckedMenus(menuInfo);
    else setCheckedMenus(null);
  }
};

// 선택된 요소가 체크박스가 아니면 얼리 리턴, 맞으면 chekedId 반환
const getCheckedId = ({ target, menuData }: getCheckedIdType) => {
  const menuItemEl = target.closest('.checkbox') as HTMLInputElement;
  const checkedId = menuItemEl.dataset.id;
  if (target.tagName !== 'INPUT' || menuData == null || checkedId == null)
    return;
  else return checkedId;
};

// 클릭된 아이템의 클릭여부, 정보를 상태에 저장
const setIsCheckedAndCheckedItem = (args: handleClickMenuItemType) => {
  const {
    menu,
    menuData,
    checkedId,
    isChecked,
    setIsChecked,
    checkedMenus,
    setCheckedMenus,
  } = args;
  if (menuData == null) return;
  const isItemChecked = getAndSetIsItemChecked({
    menu,
    checkedId,
    isChecked,
    setIsChecked,
  });
  const menuInfo = getClickedItemInfo({ menu, menuData, checkedId });
  setCheckedMenusItem({
    menu,
    isItemChecked,
    checkedMenus,
    setCheckedMenus,
    menuInfo,
  });
};

export { getCheckedId, setIsCheckedAndCheckedItem };
