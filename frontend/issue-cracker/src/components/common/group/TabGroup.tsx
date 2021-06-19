import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FlagIcon from '@material-ui/icons/Flag';
import styled from 'styled-components';
import { TEXT as TT, TYPE as T } from '../../../utils/const';
import TextGroup from '../group/TextGroup';
import CountGroup from '../group/CountGroup';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '40px',
      color: 'gray',
    },
  })
);

const TabGroup = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomTabGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        {/* <Link to="/main/label-list"> */}
        <Button
          className={classes.button}
          startIcon={<LocalOfferIcon />}
          component={Link}
          to="/main/label-list"
        >
          <TextGroup type={T.SMALL} content={TT.LABEL} color="#6E7191" />
          <CountGroup count={0} color="#6E7191" />
        </Button>
        {/* </Link> */}
        {/* <Link to="/main/milestone"> */}
        <Button
          className={classes.button}
          startIcon={<FlagIcon />}
          component={Link}
          to="/main/milestone"
        >
          <TextGroup type={T.SMALL} content={TT.MILESTONE} color="#6E7191" />
          <CountGroup count={0} color="#6E7191" />
        </Button>
        {/* </Link> */}
      </CustomTabGroup>
    </div>
  );
};

export default TabGroup;

const TabButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

const CustomTabGroup = styled(ButtonGroup)`
  a {
    border: 1px solid ${({ theme }) => `${theme.colors.gray3}`};
    border-radius: 16px;
  }

  button {
    border-color: ${({ theme }) => `${theme.colors.gray3}`};
    color: ${({ theme }) => `${theme.colors.gray3}`};
    padding: 0px 15px;

    :hover {
      border-color: ${({ theme }) => `${theme.colors.gray3}`};
      background: transparent;
    }
  }

  margin: 0;
  margin-right: 20px;
`;
