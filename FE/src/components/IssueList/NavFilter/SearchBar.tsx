import { Box, Input, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';
import { TextIssueList } from '../../../util/reference';

const SearchBar = () => {
  const { filter } = TextIssueList;

  return (
    <SearchBarLayout>
      <FilterButton>
        <span className="caption">{filter.caption}</span>
        <ExpandMore />
      </FilterButton>
      <FilterInput disableUnderline placeholder={filter.placeHolder} />
    </SearchBarLayout>
  );
};
export default SearchBar;

// --- Styled Components ---
const SearchBarLayout = styled(Box)`
  min-width: 50%;

  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  border-radius: 11px;
`;

const FilterButton = styled(Button)`
  min-width: 20%;
  height: 100%;
  padding: 0 4px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayScale.label};
  border-right: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  background-color: ${({ theme }) => theme.colors.grayScale.bgColor};
  border-radius: 11px 0px 0px 11px;
`;

const FilterInput = styled(Input)`
  height: 100%;
  width: 100%;
  padding: 0 4px;

  background-color: ${({ theme }) => theme.colors.grayScale.inputBgColor};
  border-radius: 0px 11px 11px 0px;
`;
