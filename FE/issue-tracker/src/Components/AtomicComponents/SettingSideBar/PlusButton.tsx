import { useSetRecoilState } from "recoil";
import { showDropDownState } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStore";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

interface Props {
  id: string;
}

const PlusButton = ({ id }: Props) => {
  const setAssigneeShowFlag = useSetRecoilState(showDropDownState.assignee);
  const setLabelShowFlag = useSetRecoilState(showDropDownState.label);
  const setMileStoneShowFlag = useSetRecoilState(showDropDownState.mileStone);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clicked = (e.target as HTMLElement).closest(`#${id}`);
    if ((clicked as HTMLElement).id === "담당자")
      setAssigneeShowFlag((prev) => !prev);
    else if ((clicked as HTMLElement).id === "레이블")
      setLabelShowFlag((prev) => !prev);
    else setMileStoneShowFlag((prev) => !prev);
  };

  return (
    <IconButton onClick={handleOnClick}>
      <AddIcon />
    </IconButton>
  );
};

export default PlusButton;
