import { useRecoilValue } from "recoil";
import { ItemsState } from "@/Components/SettingSideBar/SettingSideBarStore";
import SettingSideBarItem from "./SettingSideBarItem";
import { SettingSideBar as S } from "@/Components/SettingSideBar/SettingSideBarStyles";

const SettingSideBar = () => {
  const items = useRecoilValue(ItemsState);
  return (
    <S.SettingSideBar>
      {items.map((item) => (
        <SettingSideBarItem key={item} id={item} item={item} />
      ))}
    </S.SettingSideBar>
  );
};

export default SettingSideBar;
