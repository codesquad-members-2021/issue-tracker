import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import HeadContent from '@components/milestoneList/HeadContent';
import MilestoneCreate from '@components/milestoneList/MilestoneCreate';
import MilestoneSwitching from '@components/milestoneList/MilestoneSwitching';
import IconButton from '@components/common/IconButton';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import useToggle from '@/utils/hook/useToggle';
import useFetch, { AsyncState } from '@/utils/hook/useFetch';
import API from '@/utils/API';

const MilestoneListPage = () => {
  const [isShowCreate, setShowCreate] = useToggle(false);
  const [milestoneList] = useFetch(API.get.milestones);
  const { data, loading, error }: AsyncState<any, any> = milestoneList;
  const [casementMilestoneState, setCasementMilestoneState] = useState([]);

  const handleClickChangeCasementState = ({ isClose }: { isClose: boolean }) => () => {
    isClose
      ? setCasementMilestoneState(filteringClosedState({ data, isClose }))
      : setCasementMilestoneState(filteringClosedState({ data, isClose }))
  }

  useEffect(() => {
    if (!data) return;
    setCasementMilestoneState(filteringClosedState({ data, isClose: false }));
  }, [data])

  return (
    <>
      <HeadContent {...{ isShowCreate, setShowCreate }} />
      {isShowCreate && <MilestoneCreate />}
      <ListWrapper wrapWidth="100%">
        <ListHeader>
          <IconButton icon='milestone'
            onClick={handleClickChangeCasementState({ isClose: false })}>
            <ToggleItem>
              <RadioButton type="radio" name="milestoneToggle" defaultChecked={true} />
              <span>열린 마일스톤 ({data && filteringClosedState({ data, isClose: false }).length})</span>
            </ToggleItem>
          </IconButton>
          <IconButton icon='closeBox'
            onClick={handleClickChangeCasementState({ isClose: true })}>
            <ToggleItem>
              <RadioButton type="radio" name="milestoneToggle" />
              <span>닫힌 마일스톤 ({data && filteringClosedState({ data, isClose: true }).length})</span>
            </ToggleItem>
          </IconButton>
        </ListHeader>
        {casementMilestoneState.length ?
          casementMilestoneState.map((item: any) => {
            return <MilestoneSwitching key={item.id}
              milestoneItem={item} />
          })
          : <>
            {!loading && <>검색과 일치하는 결과가 없습니다</>}
          </>
        }
        {loading && <>loading...</>}
        {error && <>error...</>}
      </ListWrapper>
    </>
  )
}

const filteringClosedState = ({ data, isClose }: { data: any, isClose: boolean }) => {
  return data.filter(({ closed }: { closed: boolean }) => isClose ? closed : !closed);
}

const ListHeader = styled.div``;

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

export default MilestoneListPage;
