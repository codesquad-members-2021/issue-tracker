import { useEffect } from 'react';
import styled from 'styled-components';
import FilterItem from './FilterItem';
import IssueStateChangeFilter from './IssueStateChangeFilter';
import IconButton from '@components/common/IconButton';
import { IssueListItemType } from '@components/common/types/APIType';
import { issueCheckedItemAtom, issueCheckedAllItemAtom } from '@components/common/atoms/checkBoxAtom';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { pipe, getLength, _ } from '@/utils/functionalUtils';

type ListHeaderType = {
  issueItems: Array<IssueListItemType>;
  handleClickShowFilterModal: (title: string) => () => void;
}

const ListHeader = ({ issueItems, handleClickShowFilterModal }: ListHeaderType) => {
  const [checkedIssueItem, setCheckedIssueItems] = useRecoilState(issueCheckedItemAtom);
  const [isAllIssueChecked, setAllIssueChecked] = useRecoilState(issueCheckedAllItemAtom);
  
  const handleChangeAllCheck = () => {
    isAllIssueChecked
      ? setCheckedIssueItems(new Set())
      : setCheckedIssueItems(new Set(issueItems.map(({ id }: { id: number }) => id)));
    setAllIssueChecked(!isAllIssueChecked);
  };

  const openIssueCount = pipe(
    _.filter(({ closed }: { closed: boolean }) => !closed),
    getLength
  )(issueItems);

  const closeIssueCount = pipe(
    _.filter(({ closed }: { closed: boolean }) => closed),
    getLength
  )(issueItems);

  return (
    <ListHeaderWrapper>
      <div>
        <AllCheckerInput type="checkbox" checked={isAllIssueChecked} onChange={handleChangeAllCheck} />
        {checkedIssueItem.size
          ? <>{checkedIssueItem.size}개 이슈 선택</>
          :
          <>
            <IconButton icon="alertCircle">
              <ToggleItem>
                <RadioButton type="radio" name="issueToggle" defaultChecked={true} />
                <span>열린 이슈 ({openIssueCount})</span>
              </ToggleItem>
            </IconButton>
            <IconButton icon='closeBox'>
              <ToggleItem>
                <RadioButton type="radio" name="issueToggle" />
                <span>닫힌 이슈 ({closeIssueCount})</span>
              </ToggleItem>
            </IconButton>
          </>
        }

      </div>
      {checkedIssueItem.size
        ? <FilterListWrapper>
          <IssueStateChangeFilter title='stateChange'{...{ handleClickShowFilterModal }} />
        </FilterListWrapper>

        : <FilterListWrapper>
          {filterItems.map((title) => {
            return <FilterItem key={title} {...{ title, handleClickShowFilterModal }} />
          })}
        </FilterListWrapper>
      }

    </ListHeaderWrapper>
  )
}

const filterItems = ['manager', 'label', 'milestone', 'writer'];

const ListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight:700;
  color: #6e7191;
`;

const AllCheckerInput = styled.input`
  margin-right: 17px;
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
