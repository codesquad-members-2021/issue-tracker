import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

export const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
