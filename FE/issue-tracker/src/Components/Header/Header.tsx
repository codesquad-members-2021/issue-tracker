import UserProfile from "../AtomicComponents/UserProfile";
import { StylesProvider } from "@material-ui/core/styles";

import { Header as S } from "./HeaderStyles";

const Header = () => {
  return (
    <StylesProvider injectFirst>
      <S.Header>
        <div>ISSUE TRACKER</div>
        <UserProfile size={5} />
      </S.Header>
    </StylesProvider>
  );
};

export default Header;
