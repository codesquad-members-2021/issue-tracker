import { StylesProvider } from "@material-ui/core";
import { SettingSideBar as S } from "@/Components/SettingSideBar/SettingSideBarStyles";

const ItemCheckBox = () => {
  return (
    <StylesProvider injectFirst>
      <S.ItemCheckBox color="primary" />
    </StylesProvider>
  );
};

export default ItemCheckBox;
