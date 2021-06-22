import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  selectIssueAll,
  selectCheckBoxAppBar,
  openState,
  openedIssues,
  closedIssues,
  selectedIssuesState,
} from "utils/states";
import { GreenCheckbox } from "./CheckBox.style";

export default function CheckBoxAppBar() {
  const [selectedCheckBoxAppBar, setSelectedCheckBoxAppBar] = useRecoilState(selectCheckBoxAppBar);
  const setSelectedIssueAll = useSetRecoilState(selectIssueAll);
  const isOpenState = useRecoilValue(openState);
  const [openIssues, setOpenIssues] = useRecoilState(openedIssues);
  const [closeIssues, setCloseIssues] = useRecoilState(closedIssues);
  const [selectedIssues, setSelectedIssues] = useRecoilState(selectedIssuesState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) setSelectedIssues(new Set());
    else {
      const issues = isOpenState
        ? openIssues.map((issue) => issue.id)
        : closeIssues.map((issue) => issue.id);
      setSelectedIssues(new Set(issues));
    }
    setSelectedIssueAll(event.target.checked);
    setSelectedCheckBoxAppBar(event.target.checked);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox checked={selectedCheckBoxAppBar} onChange={onChange} name="checkedG" />
        }
        label=""
      />
    </FormGroup>
  );
}
