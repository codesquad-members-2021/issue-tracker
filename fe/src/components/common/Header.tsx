import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textDecoration: "none",
    },
  })
);

function Header() {
  const classes = useStyles();

  return (
    <HeaderWrapper>
      <ToHome href="/">
        <Typography className={classes.root} variant="h3">
          Issue Tracker
        </Typography>
      </ToHome>
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

const ToHome = styled.a`
  all: unset;
  cursor: pointer;
  color: #000;
`;

const Title = styled.h1``;

const Account = styled.div``;
