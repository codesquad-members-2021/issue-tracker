import { atom } from "recoil";

export const checkedItemState = atom<any>({
  key: "checkedItemState",
  default: new Set(),
});

export const checkedState = atom<any>({
  key: "checkedState",
  default: false,
});
