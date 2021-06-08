import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import useButtonStyles from '../styles/ButtonStyles';
import { ClassNameMap } from '@material-ui/styles/withStyles';

interface Prop {
  type: string;
  name: string;
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
}

const ButtonList: FC<Prop> = ({ type, name }: Prop) => {
  const classes = useButtonStyles();

  return {
    large: <ButtonLarge {...{ classes, name }} />,
    medium: <ButtonMedium {...{ classes, name }} />,
    smallFill: <ButtonSmallFill {...{ classes, name }} />,
    smallBorder: <ButtonSmallBorder {...{ classes, name }} />,
    mediumText: <ButtonMediumText {...{ classes, name }} />,
    smallText: <ButtonSmallText {...{ classes, name }} />,
  }[type] as JSX.Element;
};

export default ButtonList;

function ButtonLarge({ classes, name }: IButton) {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.buttonLarge}
      style={{
        backgroundColor: '#815854',
      }}
    >
      {name}
    </Button>
  );
}

function ButtonMedium({ classes, name }: IButton) {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.buttonMedium}
      style={{
        backgroundColor: '#815854',
      }}
    >
      {name}
    </Button>
  );
}

function ButtonSmallFill({ classes, name }: IButton) {
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      color="secondary"
      className={classes.buttonSmallFill}
      style={{
        backgroundColor: '#815854',
      }}
    >
      {name}
    </Button>
  );
}

function ButtonSmallBorder({ classes, name }: IButton) {
  return (
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      color="secondary"
      className={classes.buttonSmallBorder}
      style={{
        border: '1px solid #815854',
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
      color="secondary"
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
      color="secondary"
      startIcon={<AddIcon />}
      className={classes.buttonSmallText}
    >
      {name}
    </Button>
  );
}
