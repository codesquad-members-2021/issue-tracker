import React, { useState } from "react";
import { CheckboxProps, Checkbox, FormControlLabel } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { atom, useRecoilState } from "recoil";

const AmberCheckbox = withStyles({
  root: {
    color: amber[400],
    "&$checked": {
      color: amber[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

interface checkBoxProps {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  name: string;
}

const issueState = atom({
  key: "issueState",
  default: false,
});

export default function CheckBoxTmp({ checked, name, onChange }: checkBoxProps) {
  const [checkState, setCheckState] = useRecoilState(issueState);

  const handleChange = () => {
    setCheckState(!checkState);
  };

  return (
    <FormControlLabel
      control={<AmberCheckbox checked={checked} onChange={onChange || handleChange} name={name} />}
      label=""
    />
  );
}
