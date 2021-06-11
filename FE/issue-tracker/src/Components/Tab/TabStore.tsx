import { atom } from "recoil";

export const toggleAddNewLabelState = atom({
  key: "toggleAddNewLabelState",
  default: false,
});

export const toggleEditLabelState = atom({
  key: "toggleEditLabelState",
  default: false,
});
