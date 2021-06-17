import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import {
  filterAtom, filterCheckboxListAtom,
  FilterCheckboxListType,
  filterRadioButtonListAtom, FilterRadioButtonListType
} from '@components/common/atoms/filterAtom';

type FilterTabType = {
  header: string;
  filterList: Array<string>;
  inputType: string;
}

const filterHeaderNames: { [key: string]: string } = {
  issue: '이슈',
  manager: '담당자',
  label: '레이블',
  milestone: '마일스톤',
  writer: '작성자'
}

const FilterTab = ({ header, filterList, inputType }: FilterTabType) => {
  const [filterModalState, setFilterModalState] = useRecoilState(filterAtom);
  const switchAtom = inputType === 'radio' ? filterRadioButtonListAtom : filterCheckboxListAtom;
  const [defaultCheckerState, setDefaultCheckerState] = useRecoilState<any>(switchAtom);

  const handleClickHideFilterModal = useCallback((event: MouseEvent) => {
    const targetList = (event.target as HTMLElement);
    const checkTarget = targetList.closest('.filterTab');
    if (checkTarget) return;
    setFilterModalState({
      issue: false,
      manager: false,
      label: false,
      milestone: false,
      writer: false,
    })
  }, []);

  const handleChangeDefaultChecker = useCallback((listItem) => () => {
    const { name, ...info } = listItem;
    if (inputType === 'radio') {
      setDefaultCheckerState((state: FilterRadioButtonListType) => ({ ...state, [header]: { name, info } }));
    } else {
      setDefaultCheckerState((state: FilterCheckboxListType) => {
        const presentIndex = state[header].findIndex((item: any) => item.name === name);
        if (presentIndex !== -1) {
          return {
            ...state,
            [header]: [...state[header].slice(0, presentIndex), ...state[header].slice(presentIndex + 1)]
          }
        }
        return { ...state, [header]: [{ name, info }, ...state[header]] }
      });
    }
  }, []);

  useEffect(() => {
    if (Object.values(filterModalState).every(v => !v)) return;
    document.addEventListener('click', handleClickHideFilterModal);
    return () => {
      document.removeEventListener('click', handleClickHideFilterModal);
    };
  }, [filterModalState]);

  useEffect(() => {
    setFilterModalState({
      issue: false,
      manager: false,
      label: false,
      milestone: false,
      writer: false,
    });
  }, [defaultCheckerState])

  return (
    <FilterTabWrapper className="filterTab"
      isShow={filterModalState[header]}
      {...{ header }} >
      <FilterTabHeader>{filterHeaderNames[header]} 필터</FilterTabHeader>
      {filterList.map((listItem: any, idx) => {

        return (<div key={`${header}-${idx}`}>
          <FilterLabel>
            <input type={inputType} name={header}
              onChange={handleChangeDefaultChecker(listItem)}
              checked={inputType === 'radio' ?
                defaultCheckerState[header].name === listItem.name :
                defaultCheckerState[header]
                  .findIndex((item: any) => item.name === listItem.name) !== -1} />
            <span>{listItem.name}</span>
          </FilterLabel>
        </div>)
      })}
    </FilterTabWrapper>
  )
}

const FilterTabWrapper = styled.div<{ isShow: boolean, header: string }>`
      position: absolute;
      width: 200px;
      top:${({ header }) => header === 'issue' ? '35px' : '30px'};
      left: ${({ header }) => header === 'issue' && 0};
      right: ${({ header }) => header !== 'issue' && '-8px'};
      z-index: 1;
      border:1px solid #d9dbe9;
      background: #FEFEFE;
      border-radius: 11px;
      box-shadow:0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
      visibility:${({ isShow }) => isShow ? 'visible' : 'hidden'};
       > div{
         padding: .5rem;
        }
        div + div{
            border-top:1px solid #d9dbe9;
        }
        &:hover{
            cursor:default;
        }
`

const FilterTabHeader = styled.div`
      background:#F7F7FC;
      border-radius: 11px 11px 0 0;
`;


const FilterLabel = styled.label`
      display:flex;
      justify-content: space-between;
      flex-direction: row-reverse;
  & > span{
        color: #A3A1B0;
      font-size: 12px;
  }
  & > :checked + span{
        color: #000;
  }
      &:hover{
        cursor:pointer;
  }
`;

export default FilterTab;
