import React from "react";
import IssueRefMenuPresenter from "./IssueRefMenu.presenter";
import { IssueRefMenuProps, UsefulObjectType } from "utils/interface";
import { useRecoilState } from "recoil";
import { selectionState } from "utils/states";

export default function IssueRefMenuContainer({ buttonTitle, listItems }: IssueRefMenuProps) {
  const [selectState, setSelectState] = useRecoilState(selectionState);

  const handleChange = (event: React.ChangeEvent<UsefulObjectType>) => {
    const name = event.target.name as keyof typeof selectState;
    setSelectState({
      ...selectState,
      [name]: event.target.value,
    });
  };

  return <IssueRefMenuPresenter {...{ buttonTitle, listItems, handleChange, selectState }} />;
}
