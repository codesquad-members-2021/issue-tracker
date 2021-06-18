import React, { ReactElement, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { issueFilterTypeState, selectedTabState, selectedTabType } from 'store/issueInfoStore';
import useToggle from 'hooks/useToggle';
import TabModal from 'components/common/tabModal/TabModal';
import SelectedTabUser from 'page/createIssuePage/issueDetailOption/SelectedTabUser';
import SelectedTabLabel from 'page/createIssuePage/issueDetailOption/SelectedTabLabel';
import SelectedTabMilestone from 'page/createIssuePage/issueDetailOption/SelectedTabMilestone';

interface Props {
  id?: number;
}

interface filterObjType {
  key: string;
  name: string;
}

export default function IssueDetailOption({ id }: Props): ReactElement {
  const setFilterType = useSetRecoilState(issueFilterTypeState);
  //선택한 애들?
  const selectTab = useRecoilValue(selectedTabState);
  //렌더링시 사용할 상태
  const [selectTabToRender, setSelectTabToRender] = useState<selectedTabType>({
    assignee: [],
    label: [],
    milestone: null,
  });

  const assigneeToggle = useRef<HTMLDivElement>(null);
  const labelToggle = useRef<HTMLDivElement>(null);
  const milestoneToggle = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const tabOptions = [
    { key: 'assignee', name: '담당자', ref: assigneeToggle },
    { key: 'label', name: '레이블', ref: labelToggle },
    { key: 'milestone', name: '마일스톤', ref: milestoneToggle },
  ];

  const { open } = useToggle({
    toggle: [assigneeToggle, labelToggle, milestoneToggle],
    modal: modalRef,
  });

  /*
  props로 issue생성 페이지 | issue Detail 페이지 인지 구별 
  (id?:number)로구별
  
  구별해서 useGetRecoilValue(fetch-get-data);
  useEffect{
    assigned & checked 한거 상태에 등록 (atom & 현재 상태 )
  ,[]}

  useEffect{
    !open {
      atom상태값을 => useState상태에 setting
    }
  ,[open]}

  이 컴포넌트 렌더링은 useState상태만 기준으로 렌더링
  fetch에 보낼 데이터는 atom에 있음
  */

  useEffect(() => {
    setSelectTabToRender(selectTab);
  }, [selectTab]);

  const handleClick = ({ key, name }: filterObjType) => {
    setFilterType({ key, name, isMainPage: false });
  };

  const checkedList: { [key: string]: ReactElement | Array<ReactElement> | null } = {
    assignee: selectTabToRender.assignee?.map((user) => (
      <SelectedTabUser key={user.id} user={user} />
    )),
    label: selectTabToRender.label?.map((label) => (
      <SelectedTabLabel key={label.id} label={label} />
    )),
    milestone: selectTabToRender.milestone ? (
      <SelectedTabMilestone
        key={selectTabToRender.milestone.id}
        milestone={selectTabToRender.milestone}
      />
    ) : null,
  };

  const tabOptionList = tabOptions.map(({ key, name, ref }) => {
    let selectedList = checkedList[key];
    const tabListClassName = `selected__${key}`;
    return (
      <TabOptionItemBlock key={key} ref={ref} onClick={() => handleClick({ key, name })}>
        <div>
          <span>{name}</span>
          <AddOutlinedIcon />
        </div>
        <div className={tabListClassName}>{selectedList}</div>
      </TabOptionItemBlock>
    );
  });

  return (
    <>
      <IssueDetailOptionBlock>{tabOptionList}</IssueDetailOptionBlock>
      {open && <TabModal modalRef={modalRef} />}
    </>
  );
}

const IssueDetailOptionBlock = styled.div`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  over-flow: hidden;
  height: min-content;
  & > div {
    padding: 34px 32px;
    & > div:first-child {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.lineGrey};
    }
  }
`;

const TabOptionItemBlock = styled.div`
  .selected__assignee {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .selected__label {
    display: flex;
  }
`;
