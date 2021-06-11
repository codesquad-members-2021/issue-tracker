import React, { FC } from 'react';
import styled from 'styled-components';
import { ProfileImg as S } from '../../styles/CommonStyles';
import Logo from '../../common/Logo';
import { MEDIUM, LOGO_TITLE } from '../../../utils/const';
import ProfileImg from '../../common/ProfileImg';
const Header: FC = () => {
  const profileURL = localStorage.getItem('profileImageUrl');
  const profileName = localStorage.getItem('name');

  return (
    <HeaderDiv>
      <Logo type={MEDIUM} name={LOGO_TITLE} />
      <UserDiv>
        <AccountName>{profileName}</AccountName>
        {profileURL && <S.ProfileImgLarge src={profileURL} />}
      </UserDiv>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 27px 0 57px 0;
`;
const UserDiv = styled.div`
  display: flex;
  align-items: center;
`;
const AccountName = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.gray2};
  font-family: 'Montserrat', sans-serif;
`;
