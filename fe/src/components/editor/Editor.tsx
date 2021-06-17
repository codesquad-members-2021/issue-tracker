import React from "react";
import { Typography, Paper, TextField, Grid } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
import Header from "components/common/Header";

export default function Editor() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Paper className={classes.paper} variant="outlined">
          <Typography variant="h5" gutterBottom>
            새로운 이슈 작성
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={9} className={classes.editor}>
              <TextField className={classes.title} label="제목" variant="outlined" />
              <TextField
                className={classes.content}
                label="내용"
                variant="outlined"
                multiline
                rows={20}
                placeholder="내용을 입력해주세요."
              />
            </Grid>
            <Grid item xs={1}>
              {/* TODO: 담당자, 레이블, 마일스톤 선택하는 버튼? Selection? 암튼 그런거 만들기 */}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        height: "70vh",
      },
    },
    paper: {
      padding: "2em",
      // fontWeight: "bold",
    },
    editor: {
      "& > *": {
        marginTop: theme.spacing(5),
      },
    },
    title: {
      width: "100%",
    },
    content: {
      width: "100%",
    },
  })
);
