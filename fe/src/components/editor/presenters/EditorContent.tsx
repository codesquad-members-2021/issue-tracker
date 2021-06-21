import React from "react";
import { EditorRefsType } from "utils/interface";
import { Grid, TextField } from "@material-ui/core";
import { Editor } from "@toast-ui/react-editor";
import { useStyles } from "../styles/useStyles";

function EditorContent(props: EditorRefsType) {
  const classes = useStyles();
  const { editorRef, titleRef } = props;

  return (
    <Grid item xs={9}>
      <TextField
        inputRef={titleRef}
        className={classes.title}
        label="제목"
        variant="outlined"
        placeholder="제목을 입력해주세요."
      />
      <Editor
        ref={editorRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </Grid>
  );
}

export default EditorContent;
