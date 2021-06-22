import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default function Others() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button>레이블</Button>
        <Button>마일스톤</Button>
      </ButtonGroup>
      <Button href="/editor" size="large" variant="contained" color="primary">
        이슈 작성
      </Button>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);
