import React from 'react';
import styled from 'styled-components';
import useFetch from '../../util/useFetch';
import User from '../../styles/atoms/User';
import { ReactComponent as Logo } from '../../icons/logoMedium.svg';

const Header = () => {
  const { data } = useFetch('user', 'image');
  localStorage.setItem('userData', JSON.stringify(data));

  return (
    <HeaderContainer>
      <Logo />
      <User imageURL={data?.profile_image} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

export default Header;
