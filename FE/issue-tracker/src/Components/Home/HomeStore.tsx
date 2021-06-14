import { atom } from "recoil";

export const checkedItemState = atom({
  key: "checkedItemState",
  default: new Set(),
});

export const checkedState = atom({
  key: "checkedState",
  default: false,
});

export const filterModalOpenState = atom({
  key: "filterModalOpenState",
  default: false,
});

export const categoryModalOpenState = atom<{
  openedModalTitle: string | any;
  isOpen: boolean;
}>({
  key: "categoryModalOpenState",
  default: {
    openedModalTitle: "담당자",
    isOpen: false,
  },
});
