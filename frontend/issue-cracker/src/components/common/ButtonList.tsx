import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import useButtonStyles from '../styles/ButtonStyles';
import { ClassNameMap } from '@material-ui/styles/withStyles';

interface Prop {
  type: string;
  name: string;
  color?: string;
}
type IButtonType = ClassNameMap<
  | 'buttonLarge'
  | 'buttonMedium'
  | 'buttonSmallFill'
  | 'buttonSmallBorder'
  | 'buttonMediumText'
  | 'buttonSmallText'
>;

interface IButton {
  classes: IButtonType;
  name: string;
  color?: string;
}

const ButtonList: FC<Prop> = ({ type, name, color = 'white' }: Prop) => {
  const classes = useButtonStyles();

  return {
    large: <ButtonLarge {...{ classes, name, color }} />,
    medium: <ButtonMedium {...{ classes, name, color }} />,
    smallFill: <ButtonSmallFill {...{ classes, name, color }} />,
    smallBorder: <ButtonSmallBorder {...{ classes, name, color }} />,
    mediumText: <ButtonMediumText {...{ classes, name, color }} />,
    smallText: <ButtonSmallText {...{ classes, name, color }} />,
  }[type] as JSX.Element;
};

export default ButtonList;

function ButtonLarge({ classes, name, color }: IButton) {
  return (
    <Button
      variant="contained"
      className={classes.buttonLarge}
      style={{
        backgroundColor: `${color}`,
        color: `${color === 'white' ? '#222' : '#fff'}`,
      }}
    >
      {name}
    </Button>
  );
}

function ButtonMedium({ classes, name, color }: IButton) {
  return (
    <Button
      variant="contained"
      className={classes.buttonMedium}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {name}
    </Button>
  );
}

function ButtonSmallFill({ classes, name, color }: IButton) {
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      className={classes.buttonSmallFill}
      style={{
        backgroundColor: `${color}`,
        color: `${color === 'white' ? '#222' : '#fff'}`,
      }}
    >
      {name}
    </Button>
  );
}

function ButtonSmallBorder({ classes, name, color }: IButton) {
  return (
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      className={classes.buttonSmallBorder}
      style={{
        border: `1px solid ${color}`,
      }}
    >
      {name}
    </Button>
  );
}

function ButtonMediumText({ classes, name }: IButton) {
  return (
    <Button
      variant="text"
      startIcon={<AddIcon />}
      className={classes.buttonMediumText}
    >
      {name}
    </Button>
  );
}

function ButtonSmallText({ classes, name }: IButton) {
  return (
    <Button
      variant="text"
      startIcon={<AddIcon />}
      className={classes.buttonSmallText}
    >
      {name}
    </Button>
  );
}
