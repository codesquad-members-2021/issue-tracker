import { useState } from "react";
import styled from "styled-components";
import { createStyles, makeStyles, Theme, withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab, CheckboxProps, Checkbox } from "@material-ui/core";
import { green, amber } from "@material-ui/core/colors";
import { IssueRefMenuProps } from "utils/interface";
import IssueRefMenuContainer from "../issueRefMenu/IssueRefMenu.container";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { openState, selectIssueAll } from "utils/states";
import { SimpleAppBarProps } from "utils/interface";
import IssueTable from "../IssueTable";
import CheckBox from "../styles/CheckBox";

interface IssueAppBarPresenterProps extends SimpleAppBarProps {
  showOpenIssue: () => void;
  showCloseIssue: () => void;
  issueRefArray: IssueRefMenuProps[];
}

const currentIssueState = selector({
  key: "issueState",
  get: ({ get }) => {
    return get(openState);
  },
});

export default function IssueAppBarPresenter(props: IssueAppBarPresenterProps) {
  const classes = useStyles();
  const { openedIssue, closedIssue, showOpenIssue, showCloseIssue, issueRefArray } = props;
  const currOpenState = useRecoilValue(currentIssueState);
  const [selectedIssueAll, setSelectedIssueAll] = useRecoilState(selectIssueAll);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIssueAll(true);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CheckBox checked={selectedIssueAll} onChange={onChange} name="issueAll" />
          {/* <FormControlLabel
            control={
              <GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />
            }
            label=""
          /> */}
          <Tabs className={classes.title}>
            <Tab onClick={showOpenIssue} label={`열린 이슈(${openedIssue.length})`} />
            <Tab onClick={showCloseIssue} label={`닫힌 이슈(${closedIssue.length})`} />
          </Tabs>
          {issueRefArray.map(({ buttonTitle, listItems }) => (
            <IssueRefMenuContainer {...{ buttonTitle, listItems }} />
          ))}
        </Toolbar>
      </AppBar>
      {/* <Issues>
        {currOpenState
          ? openedIssue.map((issue) => <Issue key={issue.id}>{issue.title}</Issue>)
          : closedIssue.map((issue) => <Issue key={issue.id}>{issue.title}</Issue>)}
      </Issues> */}
      <IssueTable issueListItems={currOpenState ? openedIssue : closedIssue} />
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

const GreenCheckbox = withStyles({
  root: {
    color: amber[400],
    "&$checked": {
      color: amber[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const Issues = styled.ul``;

const Issue = styled.li``;
