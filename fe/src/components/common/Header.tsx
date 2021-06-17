import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Title>Issue Tracker</Title>
      <Account>깃헙 로그인</Account>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const Account = styled.div``;
