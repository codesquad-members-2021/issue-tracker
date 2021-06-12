import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextGroup from '../../common/TextGroup';
import {
  ASSIGNED_ISSUE,
  CLOSED_ISSUE,
  COMMENTED_ISSUE,
  FILTER,
  OPEN_ISSUE,
  WRITTEN_ISSUE,
} from '../../../utils/const';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(2),
      },
    },
    input: {
      borderRadius: 16,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: ['Noto Sans KR'].join(','),
      '&:focus': {
        borderRadius: 16,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

function FilterBar(): JSX.Element {
  const classes = useStyles();
  const [index, setIndex] = React.useState('필터');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setIndex(event.target.value as string);
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">필터</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={index}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={FILTER}>
            <TextGroup content={FILTER} color="#222" type="xSmall" />
          </MenuItem>
          <MenuItem value={1}>
            <TextGroup content={OPEN_ISSUE} color="#222" type="xSmall" />
          </MenuItem>
          <MenuItem value={2}>
            <TextGroup content={WRITTEN_ISSUE} color="#222" type="xSmall" />
          </MenuItem>
          <MenuItem value={3}>
            <TextGroup content={ASSIGNED_ISSUE} color="#222" type="xSmall" />
          </MenuItem>
          <MenuItem value={4}>
            <TextGroup content={COMMENTED_ISSUE} color="#222" type="xSmall" />
          </MenuItem>
          <MenuItem value={5}>
            <TextGroup content={CLOSED_ISSUE} color="#222" type="xSmall" />
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox" />
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
    </div>
  );
}

export default FilterBar;
