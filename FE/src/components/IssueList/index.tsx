import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  filterVisibleAtom,
  IFilterVisibleAtom,
  TFilterVisibleAtomTypes,
} from '../../util/store/issueListAtoms';

import ListTable from './ListTable';
import NavFilter from './NavFilter';

export interface IIssueList {
  handleFilterModalClick: (strType: TFilterVisibleAtomTypes) => void;
}

const IssueList = () => {
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
    (strType: TFilterVisibleAtomTypes) => {
      setFilterVisibleState((filterVisibleState: IFilterVisibleAtom) => ({
        ...filterVisibleState,
        [strType]: !filterVisibleState[strType],
      }));
    },
    [],
  );

  return (
    <IssueListLayout>
      <NavFilter handleFilterModalClick={handleFilterModalClick} />
      <ListTable handleFilterModalClick={handleFilterModalClick} />
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
