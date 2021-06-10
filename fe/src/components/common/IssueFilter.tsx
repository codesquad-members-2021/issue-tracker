import {
  Button,
  FormControl,
  FormLabel,
  Menu,
  RadioGroup,
} from '@material-ui/core';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { useState } from 'react';
import styled from 'styled-components';
import FilterList from './FilterList';

const testArray = [
  { description: '테스트필터1' },
  { description: '테스트필터2' },
  { description: '테스트필터3' },
  { description: '테스트필터4' },
];

const IssueFilter = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <FilterButton variant="contained" {...bindTrigger(popupState)}>
              필터
            </FilterButton>

            <CustomMenu {...bindMenu(popupState)}>
              <FormControl component="fieldset">
                <FormLabel component="legend">이슈 필터</FormLabel>
                <RadioGroup value={value} onChange={handleChange}>
                  <FilterList filterList={testArray} popupState={popupState} />
                </RadioGroup>
              </FormControl>
            </CustomMenu>
          </>
        )}
      </PopupState>
    </>
  );
};

const FilterButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.grayscale.background};
  color: ${({ theme }) => theme.color.grayscale.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  box-shadow: none;
`;

const CustomMenu = styled(Menu)`
  margin-top: 10.5rem;
`;

export default IssueFilter;
