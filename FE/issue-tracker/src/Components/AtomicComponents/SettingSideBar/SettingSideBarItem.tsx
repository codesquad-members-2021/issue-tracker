import PlusButton from "./PlusButton";
import SettingDropDown from "./SettingDropDown/SettingDropDown";
import { SettingSideBar as S } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
  item: string;
}

const SettingSideBarItem = ({ id, item }: Props) => {
  return (
    <S.SettingSideBarItem id={id}>
      {item}
      <PlusButton id={id} />
      <SettingDropDown id={id} />
    </S.SettingSideBarItem>
  );
};

export default SettingSideBarItem;
