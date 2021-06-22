import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab, Typography } from "@material-ui/core";
import { IssueRefMenuProps } from "utils/interface";
import IssueRefMenuContainer from "../issueRefMenu/IssueRefMenu.container";
import { useRecoilValue } from "recoil";
import { openState, selectedIssuesState } from "utils/states";
import { SimpleAppBarProps } from "utils/interface";
import IssueTable from "../IssueTable";
import CheckBoxAppBar from "../styles/CheckBox.AppBar";

interface IssueAppBarPresenterProps extends SimpleAppBarProps {
  showOpenIssue: () => void;
  showCloseIssue: () => void;
  issueRefArray: IssueRefMenuProps[];
}

export default function IssueAppBarPresenter(props: IssueAppBarPresenterProps) {
  const classes = useStyles();
  const { openIssues, closeIssues, showOpenIssue, showCloseIssue, issueRefArray } = props;
  const isOpenState = useRecoilValue(openState);
  const selectedIssues = useRecoilValue(selectedIssuesState);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CheckBoxAppBar />
          {selectedIssues.size > 0 ? (
            <Typography className={classes.title}>{selectedIssues.size}개 이슈 선택</Typography>
          ) : (
            <Tabs className={classes.title}>
              <Tab onClick={showOpenIssue} label={`열린 이슈(${openIssues.length})`} />
              <Tab onClick={showCloseIssue} label={`닫힌 이슈(${closeIssues.length})`} />
            </Tabs>
          )}
          {issueRefArray.map(({ buttonTitle, listItems }) => (
            <IssueRefMenuContainer {...{ buttonTitle, listItems }} />
          ))}
        </Toolbar>
      </AppBar>
      <IssueTable issueListItems={isOpenState ? openIssues : closeIssues} />
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
