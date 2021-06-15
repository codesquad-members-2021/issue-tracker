import React, { useState } from "react";
import IssueRefMenuPresenter from "./IssueRefMenu.presenter";
import { IssueRefMenuProps } from "utils/interface";

export default function IssueRefMenuContainer({ buttonTitle, listItems }: IssueRefMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <IssueRefMenuPresenter {...{ buttonTitle, listItems, handleClick, handleClose, anchorEl }} />
  );
}
