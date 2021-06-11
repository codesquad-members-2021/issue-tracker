import UserProfile from "../AtomicComponents/UserProfile";
import { Header as S } from "./HeaderStyles";

const Header = () => {
  return (
    <S.Header>
      <div>ISSUE TRACKER</div>
      <UserProfile size={5} />
    </S.Header>
  );
};

export default Header;
