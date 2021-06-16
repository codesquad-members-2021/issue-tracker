import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextGroup from './group/TextGroup';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 16,
      position: 'relative',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: ['Noto Sans KR'].join(','),
      '&:focus': {
        borderRadius: 16,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);

interface FilterMenuProps {
  menu: string;
  list: string[];
}

function FilterMenu({ menu, list }: FilterMenuProps): JSX.Element {
  const [index, setIndex] = React.useState(menu);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setIndex(event.target.value as string);
  };

  return (
    <FormControl>
      <CustomSelect
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={index}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={menu}>
          <TextGroup content={menu} color="#222" type="small" />
        </MenuItem>
        {list.map((menu, idx) => (
          <MenuItem value={idx} key={uuidv4()}>
            <TextGroup content={menu} color="#222" type="small" />
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
}

export default FilterMenu;

const CustomSelect = styled(Select)`
  min-width: 100px;
  text-align: right;
`;
