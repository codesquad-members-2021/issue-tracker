import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

function IssuePlus() {
  const classes = useStyles();
  return (
    <Button variant='contained' size='medium' color='primary' className={classes.margin}>
      + 이슈 작성
    </Button>
  );
}

export default IssuePlus;
