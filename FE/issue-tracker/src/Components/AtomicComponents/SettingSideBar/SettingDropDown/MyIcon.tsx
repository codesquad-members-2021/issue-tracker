import { SettingSideBar as S } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
}

const MyIcon = ({ id }: Props) => {
  return id === "담당자" ? <S.UserImage /> : <S.Label />;
};

export default MyIcon;
