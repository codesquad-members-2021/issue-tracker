import React, { useRef } from "react";
import { atom, useRecoilState } from "recoil";
import "@toast-ui/editor/dist/toastui-editor.css";
import IssueEditorPresenter from "./IssueEditor.presenter";

const issueDetailContentState = atom({
  key: "issueDetailContent",
  default: {
    title: "",
    content_md: "",
    content_html: "",
    assignee: [],
    author: "",
    milestone: "",
  },
});

function IssueEditorContainer() {
  const [issueDetailContent, setIssueDetailContent] = useRecoilState(issueDetailContentState);

  const editorRef = useRef<any>(null);
  const titleRef = useRef<any>(null);
  const assigneesRef = useRef<any>(null);
  const labelsRef = useRef<any>(null);
  const milestoneRef = useRef<any>(null);

  const handleSubmit = () => {
    const editorInstance = editorRef.current.getInstance();
    const content_md = editorInstance.getMarkdown();
    const content_html = editorInstance.getHTML();
    const title = titleRef.current.value;
    // setIssueDetailContent({
    //   title,
    //   content_md,
    //   content_html,
    // });
  };

  return (
    <div>
      <IssueEditorPresenter
        {...{ handleSubmit, editorRef, titleRef, assigneesRef, labelsRef, milestoneRef }}
      />
    </div>
  );
}

export default IssueEditorContainer;
