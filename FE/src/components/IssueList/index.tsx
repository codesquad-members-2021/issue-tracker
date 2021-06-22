import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  filterVisibleAtom,
  IFilterVisibleAtom,
} from 'util/store';

import ListTable from './ListTable';
import NavFilter from './NavFilter';
import { IAllGetRequestDatas, TFilterTypes } from 'util/types';

export interface IIssueList { data?: IAllGetRequestDatas }

// IssueList를 구성하는 다른 부품에서 쓰임.
export interface IIssueListChildren extends IIssueList { 
  handleFilterModalClick: (strType: TFilterTypes) => void;
}

const IssueList = ( { data } : IIssueList) => {
  // 1) 일반 (recoil 등)
  const [, setFilterVisibleState] = useRecoilState(filterVisibleAtom);

  // 2. useEffect
  // add body event
  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => document.body.removeEventListener('click', handleBodyClick);
  }, []);

  // 3. events
  // body event
  const handleBodyClick = (e: React.MouseEvent | Event) => {
    const target = e.target as HTMLElement;
    const closestTarget: HTMLElement | null = target.closest('#modal');
    const closestModalBtn : HTMLElement | null = target.closest('#modalBtn');

    if (closestTarget && closestTarget.contains(target) || closestModalBtn ) return;
    setFilterVisibleState((filterVisibleState) => ({
      ...filterVisibleState,
      assignee: false,
      label: false,
      milestone: false,
      search: false,
      writer: false,
    }));
  };

  // issueList의 모든 modal
  const handleFilterModalClick = useCallback(
    (strType: TFilterTypes) => {
      setFilterVisibleState((filterVisibleState: IFilterVisibleAtom) => ({
        ...filterVisibleState,
        [strType]: !filterVisibleState[strType],
      }));
    },
    [],
  );

  return (
    <IssueListLayout>
      <NavFilter {...{data, handleFilterModalClick}} />
      <ListTable {...{data, handleFilterModalClick}} />
    </IssueListLayout>
  );
};

export default IssueList;

// --- Styled Components ---
const IssueListLayout = styled.div`
  display: flex;
  row-gap: 1.2rem;
  align-items: center;
  flex-wrap: wrap;
`;
