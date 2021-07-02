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
        <LogoutBtn onClick={clickHandler}>로그아웃</LogoutBtn>
        <AuthorAvatar profileImg={decodedUserData?.avatar_url} size="L" />
      </StyledFlex>
    </StyledHeader>
  );
};

export default Header;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const LogoutBtn = styled.button`
  all: unset;
  height: fit-content;
  box-sizing: border-box;
  padding: 5px 10px;
  color: ${({ theme }) => theme.color.grayscale.body};
  background-color: ${({ theme }) => theme.color.grayscale.inputBG};
  border-radius: 5px;
  margin-right: 30px;
  font-size: 0.875rem;

  &:hover {
    color: ${({ theme }) => theme.color.grayscale.titleActive};
    background-color: ${({ theme }) => theme.color.grayscale.line};
    cursor: pointer;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  box-sizing: border-box;
`;
