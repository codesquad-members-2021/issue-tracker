import { atom } from "recoil";

export const ItemsState = atom({
  key: "ItemsState",
  default: ["담당자", "레이블", "마일스톤"],
});

export const showDropDownState = {
  assignee: atom({
    key: "assignee",
    default: false,
  }),
  label: atom({
    key: "label",
    default: false,
  }),
  mileStone: atom({
    key: "mileStone",
    default: false,
  }),
};

// 담당자 , 레이블 , 마일스톤을 받
