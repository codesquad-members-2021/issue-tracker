import React from "react";
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import CheckBox from "./CheckBox";
import { IssueType } from "utils/interface";
import { selector, useRecoilState, useRecoilValue, atom } from "recoil";

const issueState = atom({
  key: "issueState",
  default: false,
});

interface CardItemProps {
  item: IssueType;
  selectedIssueAllState: boolean;
}

export default function CardItem({ item, selectedIssueAllState }: CardItemProps) {
  const classes = useStyles();
  const [checkState, setCheckState] = useRecoilState(issueState);

  const handleChange = () => {
    setCheckState(!checkState);
  };

  return (
    <Card className={classes.root}>
      {/* <CheckBox
        checked={selectedIssueAllState || checkState}
        name={`${item.id}`}
        onChange={handleChange}
      /> */}
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
