import React, { FC } from 'react';
import useInputStyles from '../styles/InputStyles';
import TextField from '@material-ui/core/TextField';

interface Prop {
  type: string;
  name: string;
}

const InputList: FC<Prop> = ({ type, name }) => {
  const classes = useInputStyles();
  return {
    large: <InputLarge {...{ classes, name }} />,
    medium: <InputMedium {...{ classes, name }} />,
    small: <InputSmall {...{ classes, name }} />,
    text: <InputText {...{ classes, name }} />,
  }[type] as any;
};

export default InputList;

function InputLarge({ classes, name }: any): React.ReactElement {
  return (
    <TextField
      id="filled-basic"
      label={name}
      variant="filled"
      className={classes.InputLarge}
    />
  );
}
function InputMedium({ classes, name }: any) {
  return (
    <TextField
      id="filled-basic"
      label={name}
      variant="filled"
      className={classes.InputMedium}
    />
  );
}
function InputSmall({ classes, name }: any) {
  return (
    <TextField
      id="filled-basic"
      label={name}
      variant="filled"
      className={classes.InputSmall}
    />
  );
}
function InputText({ classes, name }: any) {
  return (
    <TextField
      id="filled-basic"
      label={name}
      variant="filled"
      className={classes.InputText}
    />
  );
}
