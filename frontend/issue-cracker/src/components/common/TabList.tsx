import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FlagIcon from '@material-ui/icons/Flag';

const useStyles = makeStyles({
  tabWrapper: {
    minWidth: 120,
  },
});

export default function TabList(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="primary"
      textColor="primary"
      aria-label="icon label tabs example"
    >
      <Tab
        value={0}
        className={classes.tabWrapper}
        label={
          <div>
            <LocalOfferIcon style={{ verticalAlign: 'middle' }} /> 라벨
          </div>
        }
      />
      <Tab
        value={1}
        className={classes.tabWrapper}
        label={
          <div>
            <FlagIcon style={{ verticalAlign: 'middle' }} /> 마일스톤
          </div>
        }
      />
    </Tabs>
  );
}
