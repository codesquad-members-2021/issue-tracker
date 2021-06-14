import React, { FC } from 'react';
import useInputStyles from '../styles/InputStyles';
import TextField from '@material-ui/core/TextField';
import { ClassNameMap } from '@material-ui/styles/withStyles';

interface Prop {
  type: string;
  name: string;
}
type IInputType = ClassNameMap<
  'InputLarge' | 'InputMedium' | 'InputSmall' | 'InputText'
>;

interface IInput {
  classes: IInputType;
  name: string;
}

const InputGroup: FC<Prop> = ({ type, name }: Prop) => {
  const classes = useInputStyles();
  return {
    large: <InputLarge {...{ classes, name }} />,
    medium: <InputMedium {...{ classes, name }} />,
    small: <InputSmall {...{ classes, name }} />,
    text: <InputText {...{ classes, name }} />,
  }[type] as JSX.Element;
};

export default InputGroup;

function InputLarge({ classes, name }: IInput): React.ReactElement {
  return (
    <TextField label={name} variant="filled" className={classes.InputLarge} />
  );
}
function InputMedium({ classes, name }: IInput) {
  return (
    <TextField label={name} variant="filled" className={classes.InputMedium} />
  );
}
function InputSmall({ classes, name }: IInput) {
  return (
    <TextField label={name} variant="filled" className={classes.InputSmall} />
  );
}
function InputText({ classes, name }: IInput) {
  return (
    <TextField label={name} variant="filled" className={classes.InputText} />
  );
}
