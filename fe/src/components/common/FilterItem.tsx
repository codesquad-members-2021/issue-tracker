import { Divider, FormControlLabel, MenuItem, Radio } from '@material-ui/core';
import styled from 'styled-components';
import { FilterItemPropsType } from '../../types/filterType';

const FilterItem = ({ popupState, filterItem }: FilterItemPropsType) => {
  return (
    <>
      <MenuItem onClick={popupState.close}>
        <CustomFormControlLabel
          control={<Radio />}
          value={filterItem.description}
          label={filterItem.description}
          labelPlacement="start"
        />
      </MenuItem>

      <Divider />
    </>
  );
};

const CustomFormControlLabel = styled(FormControlLabel)`
  width: 100%;
  justify-content: space-between;
`;

export default FilterItem;
