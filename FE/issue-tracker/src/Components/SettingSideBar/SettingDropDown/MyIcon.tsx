import { StylesProvider } from "@material-ui/core";
import { SettingSideBar as S } from "@/Components/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
}

const MyIcon = ({ id }: Props) => {
  return (
    <StylesProvider injectFirst>
      {id === "담당자" ? <S.UserImage /> : <S.Label />}
    </StylesProvider>
  );
};

export default MyIcon;
