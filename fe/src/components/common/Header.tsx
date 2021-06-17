import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Header() {
  return (
    <HeaderWrapper>
      <Typography variant="h3">Issue Tracker</Typography>
      <Account>깃헙 로그인</Account>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0;
`;

const Title = styled.h1``;

const Account = styled.div``;
