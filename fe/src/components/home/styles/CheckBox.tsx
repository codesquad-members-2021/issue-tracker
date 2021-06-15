import React from "react";
import { CheckboxProps, Checkbox, FormControlLabel } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export default function CheckBox({ checked, name, onChange }: checkBoxProps) {
  return (
    <FormControlLabel
      control={<AmberCheckbox checked={checked} onChange={onChange} name={name} />}
      label=""
    />
  );
}
