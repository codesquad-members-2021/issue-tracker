import AuthorAvatar from 'components/common/AuthorAvatar';
import Logo from 'components/common/Logo';
import { useRecoilValue } from 'recoil';
import { decodedUserDataAtom } from 'store';
import styled from 'styled-components';
import { DecodedUserDataType } from 'types/storeTypes';

const Header = () => {
  const decodedUserData = useRecoilValue<DecodedUserDataType | null>(
    decodedUserDataAtom
  );

  return (
    <StyledHeader>
      <Logo />
      <AuthorAvatar profileImg={decodedUserData?.avatar_url} size="L" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  box-sizing: border-box;
`;
