import { useSetRecoilState } from "recoil";
import { showDropDownState } from "@/Components/SettingSideBar/SettingSideBarStore";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

interface Props {
  id: string;
}

const PlusButton = ({ id }: Props) => {
  const setAssigneeShowFlag = useSetRecoilState(showDropDownState.assignee);
  const setLabelShowFlag = useSetRecoilState(showDropDownState.label);
  const setMileStoneShowFlag = useSetRecoilState(showDropDownState.mileStone);

  const handleOnClick = (e: any) => {
    const clicked = e.target.closest(`#${id}`).id;
    if (clicked === "담당자") setAssigneeShowFlag((prev) => !prev);
    else if (clicked === "레이블") setLabelShowFlag((prev) => !prev);
    else setMileStoneShowFlag((prev) => !prev);
  };

  return (
    <IconButton onClick={handleOnClick}>
      <AddIcon />
    </IconButton>
  );
};

export default PlusButton;
