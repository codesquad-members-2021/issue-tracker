import React, { FC } from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';
import { MEDIUM, LOGO_TITLE } from '../../utils/const';
import AccountIcon from '../styles/AccountIcon';
const Header: FC = () => {
  // const [profileURL, setProfileURL] = useState('');
  // useEffect(() => {
  //     const profileImg = localStorage.getItem('ProfileURL');
  //     setProfileURL(profileImg);
  // })
  return (
    <HeaderDiv>
      <Logo type={MEDIUM} name={LOGO_TITLE} />
      <UserDiv>
        <AccountName>ink-0</AccountName>
        <AccountIcon />
        {/* <ProfileImg /> */}
      </UserDiv>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 27px 80px 57px 80px;
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
// const ProfileImg = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 70%;
//   /* object-fit: contain; */
// `;
