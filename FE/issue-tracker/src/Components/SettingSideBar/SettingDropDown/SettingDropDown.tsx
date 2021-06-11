import { useRecoilValue } from "recoil";
import { showDropDownState } from "@/Components/SettingSideBar/SettingSideBarStore";
import Title from "./Title";
import Item from "./Item";
import { SettingSideBar as S } from "@/Components/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
}

const SettingDropDown = ({ id }: Props) => {
  const assigneeIsShow = useRecoilValue(showDropDownState.assignee);
  const labelIsShow = useRecoilValue(showDropDownState.label);
  const mileStoneIsShow = useRecoilValue(showDropDownState.mileStone);
  let isShow;
  if (id === "담당자") isShow = assigneeIsShow;
  else if (id === "레이블") isShow = labelIsShow;
  else isShow = mileStoneIsShow;

  return (
    <S.SettingDropDown isShow={isShow} id={id}>
      <Title id={id} />
      <Item id={id} />
    </S.SettingDropDown>
  );
};

export default SettingDropDown;
