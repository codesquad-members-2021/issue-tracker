import MyIcon from "./MyIcon";
import ItemCheckBox from "./ItemCheckBox";
import { SettingSideBar as S } from "@/Components/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
}

const Item = ({ id }: Props) => {
  return (
    <S.Item>
      <S.LeftItems>
        {id === "마일스톤" ? null : <MyIcon id={id} />}
        {/* 추후 받아오는 데이터에 따라 아이템 부여 예정 */}
      </S.LeftItems>
      <ItemCheckBox />
    </S.Item>
  );
};

export default Item;
