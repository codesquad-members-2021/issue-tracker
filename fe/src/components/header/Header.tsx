import { Button } from '@material-ui/core';
import AuthorAvatar from 'components/common/AuthorAvatar';
import Logo from 'components/common/Logo';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { decodedUserDataAtom } from 'stores/userStore';
import styled from 'styled-components';
import { DecodedUserDataType } from 'types/storeTypes';

const Header = () => {
  const history = useHistory();
  const decodedUserData = useRecoilValue<DecodedUserDataType | null>(
    decodedUserDataAtom
  );

  const clickHandler = () => {
    localStorage.removeItem('jwt');
    history.push('/');
  };


  return (
    <StyledHeader>
      <Logo />
      <StyledFlex>
        <LogoutBtn onClick={clickHandler}>로그 아웃</LogoutBtn>
        <AuthorAvatar profileImg={decodedUserData?.avatar_url} size="L" />
      </StyledFlex>
    </StyledHeader>
  );
};

export default Header;

const StyledFlex = styled.div`
  display: flex;
  margin-right: 30px;
`;

const LogoutBtn = styled(Button)`
  margin-right: 30px;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  box-sizing: border-box;
`;
