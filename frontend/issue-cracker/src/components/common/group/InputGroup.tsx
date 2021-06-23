import React, { FC } from 'react';
import useInputStyles from '../../styles/InputStyles';
import TextField from '@material-ui/core/TextField';
import { ClassNameMap } from '@material-ui/styles/withStyles';

interface Prop {
  type: string;
  name: string;
  variant: 'filled' | 'outlined';
}
type IInputType = ClassNameMap<
  'InputLarge' | 'InputMedium' | 'InputSmall' | 'InputText'
>;

interface IInput {
  classes: IInputType;
  name: string;
  variant: 'filled' | 'outlined';
}

const InputGroup: FC<Prop> = ({ type, name, variant }: Prop) => {
  const classes = useInputStyles();
  return {
    large: <InputLarge {...{ classes, name, variant }} />,
    medium: <InputMedium {...{ classes, name, variant }} />,
    small: <InputSmall {...{ classes, name, variant }} />,
    text: <InputText {...{ classes, name, variant }} />,
  }[type] as JSX.Element;
};

export default InputGroup;

function InputLarge({ classes, name, variant }: IInput): React.ReactElement {
  return (
    <TextField label={name} variant={variant} className={classes.InputLarge} />
  );
}
function InputMedium({ classes, name, variant }: IInput) {
  return (
    <TextField label={name} variant={variant} className={classes.InputMedium} />
  );
}
function InputSmall({ classes, name, variant }: IInput) {
  return (
    <TextField label={name} variant={variant} className={classes.InputSmall} />
  );
}
function InputText({ classes, name, variant }: IInput) {
  return (
    <TextField label={name} variant={variant} className={classes.InputText} />
  );
}
