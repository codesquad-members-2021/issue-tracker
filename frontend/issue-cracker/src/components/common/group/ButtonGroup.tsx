import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import useButtonStyles from '../../styles/ButtonStyles';
import { ClassNameMap } from '@material-ui/styles/withStyles';
import styled from 'styled-components';

interface Prop {
  type: string;
  name: string;
  color?: string;
  icon?: JSX.Element;
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
  icon?: JSX.Element | undefined;
}

const ButtonGroup: FC<Prop> = ({ type, name, color = 'white', icon }: Prop) => {
  const classes = useButtonStyles();

  return {
    large: <ButtonLarge {...{ classes, name, color }} />,
    medium: <ButtonMedium {...{ classes, name, color }} />,
    smallFill: <ButtonSmallFill {...{ classes, name, color, icon }} />,
    smallBorder: <ButtonSmallBorder {...{ classes, name, color, icon }} />,
    mediumText: <ButtonMediumText {...{ classes, name, color, icon }} />,
    smallText: <ButtonSmallText {...{ classes, name, color, icon }} />,
  }[type] as JSX.Element;
};

export default ButtonGroup;

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

function ButtonSmallFill({ classes, name, color, icon }: IButton) {
  return (
    <CustomButton
      variant="contained"
      startIcon={icon}
      className={classes.buttonSmallFill}
      style={{
        backgroundColor: `${color}`,
        color: `${color === 'white' ? '#222' : '#fff'}`,
      }}
    >
      {name}
    </CustomButton>
  );
}

function ButtonSmallBorder({ classes, name, color, icon }: IButton) {
  return (
    <Button
      variant="outlined"
      startIcon={icon}
      className={classes.buttonSmallBorder}
      style={{
        border: `1px solid ${color}`,
      }}
    >
      {name}
    </Button>
  );
}

function ButtonMediumText({ classes, name, icon }: IButton) {
  return (
    <Button
      variant="text"
      startIcon={icon}
      className={classes.buttonMediumText}
    >
      {name}
    </Button>
  );
}

function ButtonSmallText({ classes, name, icon }: IButton) {
  return (
    <Button variant="text" startIcon={icon} className={classes.buttonSmallText}>
      {name}
    </Button>
  );
}

const CustomButton = styled(Button)`
  border-radius: 16px;
`;
