import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import useButtonStyles from '../styles/ButtonStyles';

interface Prop {
  type: string;
  name: string;
}

const ButtonList: FC<Prop> = ({ type, name }) => {
  const classes = useButtonStyles();

  return {
    large: <ButtonLarge {...{ classes, name }} />,
    medium: <ButtonMedium {...{ classes, name }} />,
    smallFill: <ButtonSmallFill {...{ classes, name }} />,
    smallBorder: <ButtonSmallBorder {...{ classes, name }} />,
    mediumText: <ButtonMediumText {...{ classes, name }} />,
    smallText: <ButtonSmallText {...{ classes, name }} />,
  }[type] as any;
};

export default ButtonList;

interface IButtonLarge {
  classes: any;
  name: string;
}

function ButtonLarge({ classes, name }: IButtonLarge) {
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

function ButtonMedium({ classes, name }: any) {
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

function ButtonSmallFill({ classes, name }: any) {
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

function ButtonSmallBorder({ classes, name }: any) {
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

function ButtonMediumText({ classes, name }: any) {
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

function ButtonSmallText({ classes, name }: any) {
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
