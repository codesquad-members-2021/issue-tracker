import React, { useState, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { selectIssueAll, selectCheckBoxAppBar } from "utils/states";
import { GreenCheckbox } from "./CheckBox.style";

export default function CheckBox() {
  const [selectedCheckBoxAppBar, setSelectedCheckBoxAppBar] = useRecoilState(selectCheckBoxAppBar);
  const selectedIssueAll = useRecoilValue(selectIssueAll);
  const [state, setState] = useState(false);

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
