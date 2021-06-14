import React, { useState } from "react";
import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import { IssueType } from "utils/interface";
import IssueRefMenu from "./IssueRefMenu";

interface SimpleAppBarProps {
  openedIssue: IssueType[];
  closedIssue: IssueType[];
}

export default function IssueAppBar({ openedIssue, closedIssue }: SimpleAppBarProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);

  const showOpenIssue = () => {
    setClose(false);
    setOpen(true);
  };

  const showCloseIssue = () => {
    setOpen(false);
    setClose(true);
  };

  const IssueRefArray = [
    {
      buttonTitle: "담당자",
      listItems: ["Adela", "Bibi", "Neis", "V", "Woody"],
    },
    {
      buttonTitle: "레이블",
      listItems: ["fe", "be", "ios"],
    },
    {
      buttonTitle: "마일스톤",
      listItems: ["마스터즈코스", "프론트엔드", "백엔드", "모바일"],
    },
    {
      buttonTitle: "작성자",
      listItems: ["Adela", "Bibi", "Neis", "V", "Woody"],
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tabs className={classes.title}>
            <Tab onClick={showOpenIssue} label={`열린 이슈(${openedIssue.length})`} />
            <Tab onClick={showCloseIssue} label={`닫힌 이슈(${closedIssue.length})`} />
          </Tabs>
          {IssueRefArray.map(({ buttonTitle, listItems }) => (
            <IssueRefMenu {...{ buttonTitle, listItems }} />
          ))}
        </Toolbar>
      </AppBar>
      <Issues>
        {open
          ? openedIssue.map((issue) => <Issue>{issue.title}</Issue>)
          : closedIssue.map((issue) => <Issue>{issue.title}</Issue>)}
      </Issues>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "20px",
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Issues = styled.ul``;

const Issue = styled.li``;
