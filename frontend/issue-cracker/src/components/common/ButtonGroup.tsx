import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FlagIcon from '@material-ui/icons/Flag';
import styled from 'styled-components';

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
  })
);

const GroupSizesColors = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <TabButton startIcon={<LocalOfferIcon />}>라벨</TabButton>
        <TabButton startIcon={<FlagIcon />}>마일스톤</TabButton>
      </ButtonGroup>
    </div>
  );
};

export default GroupSizesColors;

const TabButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
