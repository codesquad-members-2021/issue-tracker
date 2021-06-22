import React, { useState, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectIssueAll, selectCheckBoxAppBar, selectedIssuesState } from "utils/states";
import { GreenCheckbox } from "./CheckBox.style";

interface CheckboxProps {
  id: number;
}

function CheckBox({ id }: CheckboxProps) {
  const [selectedCheckBoxAppBar, setSelectedCheckBoxAppBar] = useRecoilState(selectCheckBoxAppBar);
  const selectedIssueAll = useRecoilValue(selectIssueAll);
  const [state, setState] = useState(false);
  const [selectedIssues, setSelectedIssues] = useRecoilState(selectedIssuesState);

  useEffect(() => {
    setState(selectedIssueAll);
  }, [selectedIssueAll]);

  useEffect(() => {
    if (!selectedCheckBoxAppBar) return;
    setState(selectedCheckBoxAppBar);
  }, [selectedCheckBoxAppBar]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedCheckBoxAppBar && !event.target.checked) setSelectedCheckBoxAppBar(false);
    setState(event.target.checked);
    const newSet = new Set(selectedIssues.values());
    if (event.target.checked) {
      newSet.add(id);
    } else {
      newSet.delete(id);
    }
    setSelectedIssues(newSet);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<GreenCheckbox checked={state} onChange={handleChange} name="checkedG" />}
        label=""
      />
    </FormGroup>
  );
}

export default CheckBox;
