import styled from 'styled-components';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { issueCheckedItemAtom, issueCheckedAllItemAtom } from '@components/common/atoms/checkBoxAtom';
import IconButton from '@components/common/IconButton';
import { IssueListItemType } from '@components/common/types/APIType';
import FilterItem from './FilterWrapper';

type ListHeaderType = {
  issueItems: Array<IssueListItemType>;
  handleClickShowFilterModal: (title: string) => () => void;
}

const ListHeader = ({ issueItems, handleClickShowFilterModal }: ListHeaderType) => {
  const [, setCheckedIssueItems] = useRecoilState(issueCheckedItemAtom);
  const [isAllIssueChecked, setAllIssueChecked] = useRecoilState(issueCheckedAllItemAtom);

  const handleChangeAllCheck = () => {
    isAllIssueChecked
      ? setCheckedIssueItems(new Set(issueItems.map(({ id }: { id: number }) => id)))
      : setCheckedIssueItems(new Set());
    setAllIssueChecked(!isAllIssueChecked);
  };

  return (
    <ListHeaderWrapper>
      <div>
        <AllCheckerInput type="checkbox" checked={isAllIssueChecked} onChange={handleChangeAllCheck} />
        <IconButton icon="alertCircle">
          <ToggleItem>
            <RadioButton type="radio" name="issueToggle" defaultChecked={true} />
            <span>열린 이슈</span>
          </ToggleItem>
        </IconButton>
        <IconButton icon='closeBox'>
          <ToggleItem>
            <RadioButton type="radio" name="issueToggle" />
            <span>닫힌 이슈</span>
          </ToggleItem>
        </IconButton>
      </div>

      <FilterListWrapper>
        <FilterItem title='manager' {...{handleClickShowFilterModal}}/>
        <FilterItem title='label' {...{handleClickShowFilterModal}}/>
        <FilterItem title='milestone' {...{handleClickShowFilterModal}}/>
        <FilterItem title='writer' {...{handleClickShowFilterModal}}/>
      </FilterListWrapper>

    </ListHeaderWrapper>
  )
}

const ListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight:700;
  color: #6e7191;
`;

const AllCheckerInput = styled.input`
  margin-right: 33px;
`;

const RadioButton = styled.input`
  display:none;
  &:checked + span {
    color: #000;
  }
`;

const ToggleItem = styled.label`
  color: #6e7191;
  font-weight:700;
  &:hover{
    cursor:pointer; 
  }
`;

const FilterListWrapper = styled.div`
  display:flex;
  gap:2rem;
`;


export default ListHeader;
