import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import useButtonStyles from '../styles/ButtonStyles';

interface Prop {
  type: string;
}

type TPeopleCountKeys = 'adult' | 'child' | 'infant';
interface SearchBarState {
  calendar: {
    firstMonthOption: number;
    lastMonthOption: number;
    startDate?: Date;
    endDate?: Date;
  };
  fee: { start: number; end: number };
  peopleCount: { [key in TPeopleCountKeys]: number };
}

const ButtonList: FC<Prop> = ({ type }) => {
  const classes = useButtonStyles();
  return {
    large: <ButtonLarge {...{ classes }} />,
    medium: <ButtonMedium {...{ classes }} />,
    smallFill: <ButtonSmallFill {...{ classes }} />,
    smallBorder: <ButtonSmallBorder {...{ classes }} />,
    mediumText: <ButtonMediumText {...{ classes }} />,
    smallText: <ButtonSmallText {...{ classes }} />,
  }[type] as any;
};

export default ButtonList;

function ButtonLarge({ classes }: any) {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.buttonLarge}
      style={{
        backgroundColor: '#815854',
      }}
    >
      ButtonLarge
    </Button>
  );
}

function ButtonMedium({ classes }: any) {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.buttonMedium}
      style={{
        backgroundColor: '#815854',
      }}
    >
      ButtonMedium
    </Button>
  );
}

function ButtonSmallFill({ classes }: any) {
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
      Fill
    </Button>
  );
}

function ButtonSmallBorder({ classes }: any) {
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
      Border
    </Button>
  );
}

function ButtonMediumText({ classes }: any) {
  return (
    <Button
      variant="text"
      color="secondary"
      startIcon={<AddIcon />}
      className={classes.buttonMediumText}
    >
      Text
    </Button>
  );
}

function ButtonSmallText({ classes }: any) {
  return (
    <Button
      variant="text"
      color="secondary"
      startIcon={<AddIcon />}
      className={classes.buttonSmallText}
    >
      Link
    </Button>
  );
}
