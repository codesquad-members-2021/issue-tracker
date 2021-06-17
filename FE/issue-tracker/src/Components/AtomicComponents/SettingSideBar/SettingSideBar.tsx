import { useRecoilValue } from "recoil";
import { ItemsState } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStore";
import SettingSideBarItem from "./SettingSideBarItem";
import { SettingSideBar as S } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStyles";

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
