import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectIssueAll, selectCheckBoxAppBar } from "utils/states";
import { GreenCheckbox } from "./CheckBox.style";

export default function CheckBoxAppBar() {
  const [selectedCheckBoxAppBar, setSelectedCheckBoxAppBar] = useRecoilState(selectCheckBoxAppBar);
  const setSelectedIssueAll = useSetRecoilState(selectIssueAll);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
