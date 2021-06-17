import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { filterVisibleAtom } from '../../../util/store/issueListAtoms';

import { IIssueList } from '..';
import { Input, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import ListModal from '../../Common/ListModal';
import { TextIssueList } from '../../../util/reference';

const SearchBar = ({ handleFilterModalClick } : IIssueList) => {
  const { filter: { caption, placeHolder, filterHeader: title, filterList } } = TextIssueList;

  const data = {
    title,
    items: filterList.map(({ name, value: text }) => ({ name, text })),
  };

  const [filterVisibleState] = useRecoilState(filterVisibleAtom);

  return (
    <SearchBarLayout>
      <SearchBarRow>
        <FilterButton id="modalBtn" onClick={() => handleFilterModalClick('search')}>
          <span className="caption">{caption}</span>
          <ExpandMore />
        </FilterButton>
        <FilterInput disableUnderline placeholder={placeHolder} />
      </SearchBarRow>

      {filterVisibleState.search && (
        <SearchBarRow>
          <ListModal data={data} />
        </SearchBarRow>
      )}
    </SearchBarLayout>
  );
};
export default SearchBar;

// --- Styled Components ---
const SearchBarLayout = styled.div`
  min-width: 50%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  border-radius: 1.1rem;
`;

const SearchBarRow = styled.div<{width?: number}>`
  position: relative;
  display: flex;
  width: ${({width}) => width ? `${width}px` : `100%`};
  height: 100%;
`;

const FilterButton = styled(Button)`
  min-width: 20%;
  height: 100%;
  padding: 0 0.4rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayScale.label};
  border-right: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  background-color: ${({ theme }) => theme.colors.grayScale.bgColor};
  border-radius: 1.1rem 0px 0px 1.1rem;
`;

const FilterInput = styled(Input)`
  height: 100%;
  width: 100%;
  padding: 0 0.4rem;

  background-color: ${({ theme }) => theme.colors.grayScale.inputBgColor};
  border-radius: 0px 1.1rem 1.1rem 0px;
`;
