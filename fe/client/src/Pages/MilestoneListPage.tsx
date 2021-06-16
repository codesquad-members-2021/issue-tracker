import React from 'react'
import styled from 'styled-components';
import HeadContent from '@components/milestoneList/HeadContent';
import MilestoneCreate from '@components/milestoneList/MilestoneCreate';
import MilestoneSwitching from '@components/milestoneList/MilestoneSwitching';
import IconButton from '@components/common/IconButton';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import useToggle from '@/utils/hook/useToggle';

const MilestoneListPage = () => {
  const [isShowCreate, setShowCreate] = useToggle(false);
  return (
    <>
      <HeadContent {...{ isShowCreate, setShowCreate }} />
      {isShowCreate && <MilestoneCreate />}
      <ListWrapper wrapWidth="100%">
        <ListHeader>
          <IconButton icon='milestone'>
            <ToggleItem>
              <RadioButton type="radio" name="milestoneToggle" defaultChecked={true} />
              <span>열린 이슈</span>
            </ToggleItem>
          </IconButton>
          <IconButton icon='closeBox'>
            <ToggleItem>
              <RadioButton type="radio" name="milestoneToggle" />
              <span>닫힌 이슈</span>
            </ToggleItem>
          </IconButton>
        </ListHeader>
        <MilestoneSwitching />
      </ListWrapper>
    </>
  )
}

const ListHeader = styled.div`
  
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

export default MilestoneListPage;
