import { Header as S } from "./HeaderStyles";
import Avatar from "@material-ui/core/Avatar";

const Header = () => {
  return (
    <S.Header>
      <div>ISSUE TRACKER</div>
      <Avatar /> {/* 여기 src에다가 서버로부터 받아온 profile url 넣으면 됨*/}
    </S.Header>
  );
};

export default Header;
