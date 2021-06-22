import React, { useRef } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import "@toast-ui/editor/dist/toastui-editor.css";
import IssueEditorPresenter from "./IssueEditor.presenter";
import { URL } from "utils/urls";
import { temporalRefState } from "utils/states";
import { useEffect } from "react";

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
  const temporalState = useRecoilValue(temporalRefState);
  const { assignees, labels, milestones } = temporalState;

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
    // const body = JSON.stringify({
    //   title,
    //   content: content_html,
    //   created_at: new Date(),
    //   user: {
    //     id: 1,
    //     name: "bibi",
    //     login_id: "bibi6666667",
    //   },
    //   milestone_id: milestones[0].id,
    //   label_list: labels.map(lab => Object.assign(lab, {}))
    // });
    // fetch(URL.issue("issue"), {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
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
