import React, { useState } from "react";
import IssueRefMenuPresenter from "./IssueRefMenu.presenter";
import { IssueRefMenuProps, UsefulObjectType } from "utils/interface";

export default function IssueRefMenuContainer({ buttonTitle, listItems }: IssueRefMenuProps) {
  const [selectState, setSelectState] = useState<UsefulObjectType>({
    assignee: "",
    author: "",
    milestone: "",
    label: "",
  });

  const handleChange = (event: React.ChangeEvent<UsefulObjectType>) => {
    const name = event.target.name as keyof typeof selectState;
    setSelectState({
      ...selectState,
      [name]: event.target.value,
    });
  };

  return <IssueRefMenuPresenter {...{ buttonTitle, listItems, handleChange, selectState }} />;
}
