import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import { IssueRefMenuProps } from "utils/interface";
import IssueRefMenuContainer from "../issueRefMenu/IssueRefMenu.container";
import { selector, useRecoilValue } from "recoil";
import { openState } from "utils/states";
import { SimpleAppBarProps } from "utils/interface";
import IssueTable from "../IssueTable";
import CheckBoxAppBar from "../styles/CheckBox.AppBar";

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CheckBoxAppBar />
          <Tabs className={classes.title}>
            <Tab onClick={showOpenIssue} label={`열린 이슈(${openedIssue.length})`} />
            <Tab onClick={showCloseIssue} label={`닫힌 이슈(${closedIssue.length})`} />
          </Tabs>
          {issueRefArray.map(({ buttonTitle, listItems }) => (
            <IssueRefMenuContainer {...{ buttonTitle, listItems }} />
          ))}
        </Toolbar>
      </AppBar>
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
