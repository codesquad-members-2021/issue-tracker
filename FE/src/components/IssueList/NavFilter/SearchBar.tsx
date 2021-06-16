import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { atoms } from '../../../util/store';
import { Input, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import ListModal from '../../Common/ListModal';
import { TextIssueList } from '../../../util/reference';

const SearchBar = () => {
  const { filter: { caption, placeHolder, filterHeader: title, filterList } } = TextIssueList;
  const { issueList: { searchModalVisible } } = atoms;

  const data = {
    title,
    items: filterList.map(({ name, value: text }) => ({ name, text })),
  };

  const [isSearchModalVisible, setIsSearchModalVisible] = useRecoilState(searchModalVisible);
  const handleFilterButtonClick = () => setIsSearchModalVisible(!isSearchModalVisible);

  return (
    <SearchBarLayout>
      <SearchBarRow>
        <FilterButton onClick={handleFilterButtonClick}>
          <span className="caption">{caption}</span>
          <ExpandMore />
        </FilterButton>
        <FilterInput disableUnderline placeholder={placeHolder} />
      </SearchBarRow>

      <SearchBarRow>
        <ListModal
          isModalVisible={isSearchModalVisible}
          data={data}
        />
      </SearchBarRow>
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

  row-gap: 8px;
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
