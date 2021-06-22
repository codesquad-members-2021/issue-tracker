import { useState } from 'react';
import LabelMilestoneTab from 'components/common/LabelMilestoneTab';
import PrimaryOutlinedButton from 'components/atom/PrimaryOutlinedButton';
import PrimaryButton from 'components/atom/PrimaryButton';
import styled from 'styled-components';
import { labelMilestoneClickedState } from 'store/labelMilestoneStore';
import { useSetRecoilState } from 'recoil';
import LabelItem from 'page/labelPage/LabelItem';

export default function LabelPage() {
  const setLabelMilestoneState = useSetRecoilState(labelMilestoneClickedState);
  setLabelMilestoneState({ label: true, milestone: false });

  const [addClick, setAddClick] = useState(false);
  const handleClick = () => {
    setAddClick(!addClick);
  };
  return (
    <LabelBlock>
      <div className='tab__option__header'>
        <LabelMilestoneTab />
        {!addClick ? (
          <PrimaryButton value={'+ 추가'} onClick={handleClick} />
        ) : (
          <PrimaryOutlinedButton value={'× 닫기'} onClick={handleClick} />
        )}
      </div>
      <div className='tab__table'>
        <div className='tab__table__header'>
          <div>&nbsp;&nbsp;3개의 레이블</div>
        </div>
        <LabelItem />
      </div>
    </LabelBlock>
  );
}

const LabelBlock = styled.div`
  padding: 50px 80px;
  .tab__option__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .tab__table {
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.color.lineGrey};
  }
  .tab__table__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.bgGrey};
    border-radius: 16px 16px 0 0;
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.color.fontGrey};
  }
`;
