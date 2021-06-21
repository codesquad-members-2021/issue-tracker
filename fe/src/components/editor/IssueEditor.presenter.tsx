import { Typography, Paper, TextField, Grid, Button } from "@material-ui/core";
// import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Header from "components/common/Header";
import "@toast-ui/editor/dist/toastui-editor.css";
import styled from "styled-components";
import { EditorRefsType } from "utils/interface";
import { useStyles } from "./styles/useStyles";
import EditorContent from "./presenters/EditorContent";
import EditorAccordion from "./presenters/EditorAccordion";

interface IssueEditorPresenterProps extends EditorRefsType {
  handleSubmit: () => void;
}

export default function IssueEditorPresenter(props: IssueEditorPresenterProps) {
  const { handleSubmit, editorRef, titleRef, assigneesRef, labelsRef, milestoneRef } = props;
  const classes = useStyles();

  return (
    <div>
      <Header />
      <ContentBox className={classes.root}>
        <Paper className={classes.paper} variant="outlined">
          <EditorHeader>
            <Typography variant="h5" gutterBottom>
              새로운 이슈 작성
            </Typography>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              제출
            </Button>
          </EditorHeader>
          <EditorBody>
            <Grid container spacing={2}>
              <EditorContent {...{ editorRef, titleRef }} />
              <EditorAccordion {...{ assigneesRef, labelsRef, milestoneRef }} />
            </Grid>
          </EditorBody>
        </Paper>
      </ContentBox>
    </div>
  );
}

const ContentBox = styled.section``;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
`;

const EditorBody = styled.div``;
